const loadScript = async (url) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = url;

		script.onload = () => {
			resolve(true);
		};

		script.onerror = () => {
			resolve(false);
		};

		document.body.appendChild(script);
	});
};

function usePayment(price, user, handler) {
	async function showRazorPay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Oops something went wrong!");
			return;
		}

		const options = {
      key: process.env.REACT_APP_RAZORPAY,
      amount: price * 100,
      currency: "INR",
      name: "Gotham Store",
      description: "Place your order now",
      image:
        "https://w7.pngwing.com/pngs/426/341/png-transparent-shopping-cart-e-commerce-online-shopping-logo-shopping-cart-blue-service-logo.png",
      handler,
      prefill: {
        name: `${user.firstName} ${user.lastName}` ,
        email: user.email,
        contact: "9876543210",
      },
      theme: {
        color: "#008190",
      },
    };

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return showRazorPay;
}
export default usePayment;