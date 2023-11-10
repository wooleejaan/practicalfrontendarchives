"use client";

export default function CheckoutForm() {
  // react-hook-form + zod
  // rhf helps with:
  //   1) form validation
  //   2) error and loading states
  //   3) performance, pervents unnecessary re-renders

  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip" />
      <input type="checkbox" name="" />
      <button type="submit">Submit</button>
    </form>
  );
}
