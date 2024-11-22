Home assignment: 

Part 2: Adding Drag & Drop Functionality

Building on the company worker tree structure from Part 1, implement drag & drop functionality to allow reorganizing the worker hierarchy.

Requirements:

1. Add drag & drop capabilities to allow moving workers between different managers/parents in the tree
   - Workers should be draggable by clicking and holding their WorkerCard component
   - Visual feedback should be provided while dragging
   - Valid drop targets should be highlighted when dragging a worker over them

2. Implement a moveWorker method with the following signature:
   ```typescript
   moveWorker(workerId: string, newParentId: string): void
   ```
   This method should:
   - Update the worker tree data structure - moving the worker and it's subtree to another parent
   - Handle basic validation (e.g., preventing circular references, moving a node to one of it's children)
   - Maintain the existing worker data and subworkers

3. Use the provided components from jux/components:
   - Enhance the auto-generated components as needed to support drag & drop
   - You should extend props, styles and internal logic as required
   - Document any limitations or improvements needed in the generated code
   - you can look at https://docs.jux.io/developers/quickstart for further info for developers

Technical Requirements:
- You may use any drag & drop library of your choice or implement using native HTML5 drag & drop
- Implementation should take approximately 4 hours
- Focus on core functionality rather than advanced features

The goal of this exercise is both to implement the drag & drop feature and to provide valuable feedback on improving the component generation system.



