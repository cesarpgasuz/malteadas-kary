

const Cart = ({active}) => {
  return (
    <div className={`fixed w-full h-[80%] bg-yellow-300 ${active ? 'bottom-0' : '-bottom-full'} transition-all left-0 right-0 z-30`}>Cart
        
    </div>
  )
}
export default Cart