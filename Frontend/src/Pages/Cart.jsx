import React, { useMemo, useState } from "react";
import {
    ArrowLeft,
    Gift,
    Leaf,
    Minus,
    PackageCheck,
    Plus,
    ShoppingCart,
    Trash2,
    Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

const initialCartItems = [
    {
        id: 1,
        name: "Organic Cotton Tote",
        material: "Natural cotton",
        image: "/images/cart/product-1.png",
        price: 750,
        oldPrice: 999,
        quantity: 1,
    },
    {
        id: 2,
        name: "Bamboo Storage Jar",
        material: "Bamboo lid and glass body",
        image: "/images/cart/product-2.png",
        price: 590,
        oldPrice: 790,
        quantity: 1,
    },
];

const suggestedProducts = [
    {
        id: 101,
        name: "Bamboo Brush Set",
        material: "Biodegradable bamboo",
        image: "/images/cart/suggested-1.png",
        price: 299,
        oldPrice: 399,
    },
    {
        id: 102,
        name: "Reusable Steel Bottle",
        material: "Stainless steel",
        image: "/images/cart/suggested-2.png",
        price: 650,
        oldPrice: 850,
    },
];

const shippingOptions = [
    {
        id: "free",
        label: "Eco Saver Delivery",
        description: "5-7 business days",
        price: 0,
    },
    {
        id: "standard",
        label: "Standard Delivery",
        description: "3-5 business days",
        price: 50,
    },
    {
        id: "pickup",
        label: "Local Pickup",
        description: "Collect from store",
        price: 0,
    },
];

function Cart() {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponMessage, setCouponMessage] = useState("");
    const [shippingMethod, setShippingMethod] = useState("standard");
    const [useEcoCredit, setUseEcoCredit] = useState(false);

    const ecoCredit = 100;

    const subtotal = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }, [cartItems]);

    const discount = useMemo(() => {
        if (!appliedCoupon) return 0;

        if (appliedCoupon.type === "percent") {
            return Math.round((subtotal * appliedCoupon.value) / 100);
        }

        return appliedCoupon.value;
    }, [appliedCoupon, subtotal]);

    const shippingPrice = useMemo(() => {
        return shippingOptions.find((option) => option.id === shippingMethod)?.price || 0;
    }, [shippingMethod]);

    const ecoCreditDiscount = useEcoCredit ? Math.min(ecoCredit, subtotal - discount) : 0;
    const taxableAmount = Math.max(subtotal - discount - ecoCreditDiscount, 0);
    const tax = Math.round(taxableAmount * 0.05);
    const total = taxableAmount + shippingPrice + tax;

    const updateQuantity = (id, type) => {
        setCartItems((items) =>
            items.map((item) => {
                if (item.id !== id) return item;

                const nextQuantity =
                    type === "increase" ? item.quantity + 1 : item.quantity - 1;

                return {
                    ...item,
                    quantity: Math.max(1, nextQuantity),
                };
            })
        );
    };

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const addSuggestedProduct = (product) => {
        setCartItems((items) => {
            const existingItem = items.find((item) => item.id === product.id);

            if (existingItem) {
                return items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...items, { ...product, quantity: 1 }];
        });
    };

    const applyCoupon = () => {
        const code = couponCode.trim().toUpperCase();

        if (!code) {
            setAppliedCoupon(null);
            setCouponMessage("Please enter a coupon code.");
            return;
        }

        if (code === "ECO10") {
            setAppliedCoupon({ code, type: "percent", value: 10 });
            setCouponMessage("Coupon applied successfully.");
            return;
        }

        if (code === "GREEN100") {
            setAppliedCoupon({ code, type: "fixed", value: 100 });
            setCouponMessage("Coupon applied successfully.");
            return;
        }

        setAppliedCoupon(null);
        setCouponMessage("Invalid coupon code. Try ECO10 or GREEN100.");
    };

    const checkout = () => {
        if (cartItems.length === 0) return;
        navigate("/payment");
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#F5F0EA]">
            <SideNavbar />

            <main className="px-5 py-8 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-[1120px]">
                    <button
                        type="button"
                        onClick={() => navigate("/Product")}
                        className="mb-6 inline-flex items-center gap-2 font-poppins text-xs font-bold uppercase tracking-wide text-[#18382D] transition hover:text-[#1A7252]"
                    >
                        <ArrowLeft size={17} />
                        Continue Shopping
                    </button>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-[#1A7252]">
                                <span>Your Cart</span>
                                <span className="h-px w-14 bg-[#1A7252]" />
                            </div>

                            <h1 className="font-bodoni text-4xl leading-none text-[#18382D] sm:text-5xl">
                                Shopping Cart
                            </h1>
                        </div>

                        <p className="font-poppins text-sm text-stone-500">
                            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in cart
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
                        <div className="space-y-5">
                            <div className="rounded-[14px] border border-[#DED6CC] bg-[#FBFAF6] p-5">
                                <div className="hidden grid-cols-[1.3fr_120px_140px] border-b border-[#DED6CC] pb-4 font-poppins text-xs font-bold uppercase tracking-wide text-[#18382D] md:grid">
                                    <span>Product</span>
                                    <span className="text-center">Quantity</span>
                                    <span className="text-right">Total</span>
                                </div>

                                {cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="grid gap-5 border-b border-[#DED6CC] py-6 last:border-b-0 md:grid-cols-[1.3fr_120px_140px] md:items-center"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-md bg-[#EDF4EF]">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-20 w-20 object-contain"
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="font-poppins text-sm font-bold text-[#1F2933]">
                                                        {item.name}
                                                    </h3>
                                                    <p className="mt-1 font-poppins text-xs text-[#6B7280]">
                                                        {item.material}
                                                    </p>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem(item.id)}
                                                        className="mt-3 inline-flex items-center gap-1 font-poppins text-xs font-semibold text-[#B85C45] hover:underline"
                                                    >
                                                        <Trash2 size={13} />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex h-10 w-28 items-center justify-between rounded-full border border-[#DED6CC] bg-white px-3 md:mx-auto">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, "decrease")}
                                                    className="text-[#18382D]"
                                                >
                                                    <Minus size={15} />
                                                </button>
                                                <span className="font-poppins text-sm font-semibold text-[#1F2933]">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, "increase")}
                                                    className="text-[#18382D]"
                                                >
                                                    <Plus size={15} />
                                                </button>
                                            </div>

                                            <p className="font-poppins text-sm font-bold text-[#18382D] md:text-right">
                                                ₹{(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-14 text-center">
                                        <ShoppingCart className="mx-auto text-[#A8C7BD]" size={42} />
                                        <p className="mt-4 font-poppins text-sm font-semibold text-[#18382D]">
                                            Your cart is empty.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="rounded-[14px] border border-[#DED6CC] bg-[#FBFAF6] p-5">
                                <h2 className="font-poppins text-sm font-bold text-[#18382D]">
                                    You may also like
                                </h2>

                                <div className="mt-4 space-y-4">
                                    {suggestedProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex items-center justify-between gap-4 border-b border-[#DED6CC] pb-4 last:border-b-0 last:pb-0"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="grid h-14 w-14 place-items-center rounded-md bg-[#EDF4EF]">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="h-11 w-11 object-contain"
                                                    />
                                                </div>

                                                <div>
                                                    <p className="font-poppins text-xs font-bold uppercase text-[#1F2933]">
                                                        {product.name}
                                                    </p>
                                                    <p className="font-poppins text-xs text-[#1A7252]">
                                                        ₹{product.price.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => addSuggestedProduct(product)}
                                                className="rounded-full bg-[#1A7252] px-4 py-2 font-poppins text-[11px] font-bold text-white transition hover:bg-[#18382D]"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="space-y-5">
                            <div className="rounded-[14px] border border-[#DED6CC] bg-[#FBFAF6] p-5">
                                <div className="flex items-center justify-between">
                                    <p className="font-poppins text-sm font-bold text-[#18382D]">
                                        Membership
                                    </p>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-[#EDF4EF] px-3 py-1 font-poppins text-[11px] font-bold text-[#1A7252]">
                                        <Leaf size={13} />
                                        ECO GOLD
                                    </span>
                                </div>

                                <div className="mt-4 rounded-md bg-[#EDF4EF] p-4">
                                    <div className="flex items-center justify-between">
                                        <p className="font-poppins text-xs text-[#6B7280]">
                                            Eco credit balance
                                        </p>
                                        <p className="font-poppins text-sm font-bold text-[#18382D]">
                                            ₹{ecoCredit.toFixed(2)}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setUseEcoCredit((value) => !value)}
                                        className={`mt-3 w-full rounded-full py-2.5 font-poppins text-[11px] font-bold uppercase transition ${useEcoCredit
                                                ? "bg-[#18382D] text-white"
                                                : "bg-white text-[#18382D] hover:bg-[#18382D] hover:text-white"
                                            }`}
                                    >
                                        {useEcoCredit ? "Eco Credit Applied" : "Use Eco Credit"}
                                    </button>
                                </div>
                            </div>

                            <div className="rounded-[14px] border border-[#DED6CC] bg-[#FBFAF6] p-5">
                                <h2 className="font-poppins text-sm font-bold text-[#18382D]">
                                    Coupon Code
                                </h2>

                                <div className="mt-4 flex gap-2">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={(event) => setCouponCode(event.target.value)}
                                        placeholder="ECO10"
                                        className="h-11 flex-1 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                                    />
                                    <button
                                        type="button"
                                        onClick={applyCoupon}
                                        className="rounded-md bg-[#18382D] px-4 font-poppins text-[11px] font-bold uppercase text-white transition hover:bg-[#1A7252]"
                                    >
                                        Apply
                                    </button>
                                </div>

                                {couponMessage && (
                                    <p className="mt-2 font-poppins text-xs text-[#6B7280]">
                                        {couponMessage}
                                    </p>
                                )}
                            </div>

                            <div className="rounded-[14px] border border-[#DED6CC] bg-[#FBFAF6] p-5">
                                <h2 className="font-poppins text-sm font-bold text-[#18382D]">
                                    Order Summary
                                </h2>

                                <div className="mt-5 space-y-3 border-b border-[#DED6CC] pb-4 font-poppins text-sm">
                                    <div className="flex justify-between text-[#6B7280]">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between text-[#6B7280]">
                                        <span>Discount</span>
                                        <span>- ₹{discount.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between text-[#6B7280]">
                                        <span>Eco Credit</span>
                                        <span>- ₹{ecoCreditDiscount.toFixed(2)}</span>
                                    </div>

                                    <div className="pt-2">
                                        <p className="mb-3 font-poppins text-xs font-bold uppercase tracking-wide text-[#18382D]">
                                            Shipping
                                        </p>

                                        <div className="space-y-3">
                                            {shippingOptions.map((option) => (
                                                <label
                                                    key={option.id}
                                                    className="flex cursor-pointer items-start gap-3 text-[#6B7280]"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="shipping"
                                                        checked={shippingMethod === option.id}
                                                        onChange={() => setShippingMethod(option.id)}
                                                        className="mt-1 accent-[#1A7252]"
                                                    />
                                                    <span className="flex-1">
                                                        <span className="block text-xs font-semibold text-[#1F2933]">
                                                            {option.label}
                                                        </span>
                                                        <span className="block text-xs">
                                                            {option.description}
                                                        </span>
                                                    </span>
                                                    <span className="text-xs font-semibold text-[#18382D]">
                                                        {option.price === 0 ? "Free" : `₹${option.price}`}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between text-[#6B7280]">
                                        <span>GST 5%</span>
                                        <span>₹{tax.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-between font-poppins text-base font-bold text-[#18382D]">
                                    <span>Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>

                                <div className="mt-5 rounded-md bg-[#EDF4EF] p-3">
                                    <div className="flex gap-2">
                                        <PackageCheck size={17} className="mt-0.5 text-[#1A7252]" />
                                        <p className="font-poppins text-xs leading-5 text-[#6B7280]">
                                            Your order uses minimal packaging where possible and
                                            supports lower-waste delivery choices.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={checkout}
                                    disabled={cartItems.length === 0}
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#1A7252] py-3 font-poppins text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#18382D] disabled:cursor-not-allowed disabled:bg-stone-300"
                                >
                                    <Truck size={15} />
                                    Proceed To Checkout
                                </button>
                            </div>

                            <div className="rounded-[14px] border border-[#DED6CC] bg-[#FBFAF6] p-5">
                                <h2 className="font-poppins text-sm font-bold text-[#18382D]">
                                    Payment Methods
                                </h2>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {["Visa", "UPI", "PayPal", "Card", "COD", "Wallet"].map(
                                        (method) => (
                                            <div
                                                key={method}
                                                className="grid h-10 place-items-center rounded-md border border-[#DED6CC] bg-white font-poppins text-[11px] font-bold text-[#6B7280]"
                                            >
                                                {method}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;