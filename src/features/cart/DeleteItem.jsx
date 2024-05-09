import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { deleteItem } from "./cartSlice";

DeleteItem.propTypes = {
  pizzaId: PropTypes.any,
};

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="primary">
      Delete
    </Button>
  );
}

export default DeleteItem;
