const Update_Delete = ({ item, delete_a, Update}) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <button onClick={() => delete_a(item.id)}>DELETE TASK</button>
      <button onClick={() => Update(item)}>UPDATE TASK</button>
    </div>
  );
};
export default Update_Delete;
