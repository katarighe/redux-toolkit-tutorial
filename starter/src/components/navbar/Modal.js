const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shoping cart</h4>
        <div className="button-container">
          <button type="button" className="btn confirm-btn">
            confirm
          </button>
          <button type="button" className="btn cancel-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
