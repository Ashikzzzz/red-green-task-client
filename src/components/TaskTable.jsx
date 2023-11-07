const TaskTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>I have a task</tr>
            {/* row 2 */}
            <tr>I have a task</tr>
            {/* row 3 */}
            <tr>I have a task</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
