const TreeView = (props: any) => {
    const buildTree = (nodes: any[]) => {
        const tree: any[] = [];

        nodes.forEach((node) => {
            if (node.parentLevel === 0) {
                // If parentLevel is 0, it's a root node
                tree.push({ ...node, children: [] });
            } else {
                // Find the parent node by matching parentLevel with node level
                const parent = findParent(node.parentLevel, tree);
                if (parent) {
                    parent.children?.push({ ...node, children: [] });
                }
            }
        });

        return tree;
    };

    const findParent = (level: number, nodes: any[]): any | undefined => {
        for (const node of nodes) {
            if (node.level === level) {
                return node;
            }
            if (node.children && node.children.length > 0) {
                const parent = findParent(level, node.children);
                if (parent) return parent;
            }
        }
        return undefined;
    };

    const renderTree = (nodes: any[]) => {
        return (
            <ul className="list-none pl-6">
                {
                    nodes.map((node) => (
                        <li key={node.level} className="py-2">
                            <div className={`flex items-center space-x-4 ${node.level > 1 ? 'pl-4' : ''}`}>
                                <div
                                    className={`w-2 h-2 rounded-full ${node.role === 'Manager' ? 'bg-green-500' : 'bg-blue-500'}`}
                                >
                                </div>
                                <div>
                                    <p className="font-semibold">{node.managerName}</p>
                                    {
                                        node.department && (
                                            <p className="text-sm text-gray-500">
                                                {node.department}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                            {node.children && renderTree(node.children)}
                        </li>
                    ))
                }
            </ul>
        );
    };

    const treeDataWithChildren = buildTree(props.treeData);

    return <div>{renderTree(treeDataWithChildren)}</div>;
};

export default TreeView;
