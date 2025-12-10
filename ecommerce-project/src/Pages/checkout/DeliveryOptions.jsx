import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  const updateDeliveryOption = async (deliveryOptionId) => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: deliveryOptionId,
    });
    await loadCart();
  };
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        return (
          <div
            key={deliveryOption.id}
            onClick={() => updateDeliveryOption(deliveryOption.id)}
            className="delivery-option"
          >
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              onChange={() => updateDeliveryOption(deliveryOption.id)}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
