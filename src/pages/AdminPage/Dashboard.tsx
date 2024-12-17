import { toast } from 'react-toastify';
import request from '../../axios';
import { useEffect, useState } from 'react';
import TreeView from '../../components/TreeView';

const Dashboard = () => {

    const [isActive, setIsActive] = useState(true);
    const [treeData, setTreeData] = useState([]);

    useEffect(() => {
        initUI();
    }, [])

    const initUI = async () => {
        try {
            const res = await request({
                url: 'import/dashboard',
                method: 'POST',
            });
            setTreeData(res.data.users)
        } catch (e) {
            toast.error("Request Error");
        }
    }

    const handleSubmit = async () => {
        const files = document.getElementById("templateFile")?.files;
        if (files.length == 0)
            return;

        setIsActive(false);
        const formData = new FormData();
        formData.append("template", files[0]);

        try {
            const res = await request({
                url: 'import/upload',
                method: 'POST',
                data: formData,
                headers: {
                    'enctype': 'multipart/form-data'
                }
            });

            if (res.data?.status == 'success') {
                initUI();
                toast.success("Template file uploaded successfully!");
            }
            setIsActive(true);

        } catch (error) {
            toast.error("Request Error");
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Transfer Settings
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label htmlFor="templateFile" className="mb-3 block text-black dark:text-white">
                                    Excel File
                                </label>
                                <input
                                    id="templateFile"
                                    type="file"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>
                            <div className="flex justify-end gap-4.5">
                                <button
                                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                    type="button"
                                    disabled={!isActive}
                                    onClick={() => handleSubmit()}
                                >
                                    Import
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                    <div className="flex flex-col gap-9">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Diagram
                                </h3>
                            </div>
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <TreeView treeData={treeData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;