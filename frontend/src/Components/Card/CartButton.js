import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { useStore } from "../../Context/Store-Context";
import Swal from "sweetalert2";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: inherit;
  align-items: center;
  width: 225px;
  font-size: 16px;
  .cart-btn {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .title,
  .nav-link {
    color: hsl(209 61% 16%);
    letter-spacing: 1.6px;
    line-height: 36px;
    margin-right: 10px;
  }
`;
const CartButton = () => {
  //lấy ra số lượng sản phẩm khi add to cart từ context api
  const { state, dispatch } = useStore();
  const { cart, userInfo } = state;
  const navigate = useNavigate();

  //hàm đăng xuất tài khoản
  const handleLogOut = () => {
    Swal.fire({
      title: "Bạn có chắc?",
      text: "Bạn muốn đăng xuất tài khoản",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đăng Xuất!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch({ type: "USER_SIGNOUT" });
        navigate("/signin");
      }
    });
  };

  //lấy ra tên riêng "ví dụ nguyễn văn a => a"
  const getLastName = (name) => {
    if (!name) return "User";
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  };
  return (
    <Wrapper className="cart-btn-wrapper">
      {/* giỏ hàng */}
      <Link to="/cart" className="cart-btn">
        <span className="cart-container">
          Cart
          <FaShoppingCart />
          {cart.cartItems.length > 0 && (
            <span className="cart-value">
              {/* hiển tổng số lượng sản phẩm đã add bằng hàm reduce tính tổng */}
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </span>
          )}
        </span>
      </Link>
      {/* user */}
      {userInfo ? (
        <NavDropdown
          title={getLastName(userInfo.name)}
          id="basic-nav-dropdown"
          className="title"
        >
          <LinkContainer to="/profile">
            <NavDropdown.Item>Tài Khoản</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/orderhistory">
            <NavDropdown.Item>Đã Mua</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <Link className="dropdown-item" to="#signout" onClick={handleLogOut}>
            Đăng Xuất
          </Link>
        </NavDropdown>
      ) : (
        <div className="flex items-center ">
          <Link className="nav-link" to="/signin">
            Đăng Nhập
          </Link>
          <FaUserPlus />
        </div>
      )}
      {/* nếu là admin thì mới hiện*/}
      {userInfo && userInfo.isAdmin && (
        <NavDropdown title="Admin" id="admin-nav-dropdown">
          <LinkContainer to="/admin/products">
            <NavDropdown.Item>Sản Phẩm</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/admin/orders">
            <NavDropdown.Item>Đơn Hàng</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/admin/user">
            <NavDropdown.Item>Người Dùng</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      )}
    </Wrapper>
  );
};

export default CartButton;
