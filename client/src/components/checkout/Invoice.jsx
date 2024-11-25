import {} from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import "tailwindcss/tailwind.css";
import InvoiceHeader from "./InvoiceHeader";
import toast from "react-hot-toast";
import { InvoiceValidation } from "./Schema";
const initialValues = {
  name: "",
  email: "",
  postal: "",
  address: "",
  city: "",

  date: "",

  description: "",
  items: [{ name: "", quantity: "", price: "", total: "" }],
};

const InvoiceForms = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("Invoice created successfully!");
    resetForm();
    localStorage.setItem("invoice", JSON.stringify(values));
  };

  return (
    <div className="container mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={InvoiceValidation}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm, handleSubmit }) => {
          return (
            <Form className="flex flex-col gap-10">
              <InvoiceHeader resetForm={resetForm} submitForm={handleSubmit} />

              <div className="grid grid-cols-2  gap-6">
                <div className=" w-full border  border-[#D0D5DD] rounded-3xl p-6 flex flex-col gap-8">
                  <h3 className="text-[#101828] text-2xl font-semibold"></h3>
                  <div className=" flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="name"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Name
                        </label>
                        <Field
                          name="name"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="email"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Email
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="city"
                          className="text-[#344054] font-medium text-sm"
                        >
                          City
                        </label>
                        <Field
                          name="city"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="postal"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Postal Code
                        </label>
                        <Field
                          name="postal"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="postal"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col w-full gap-2">
                        <label
                          htmlFor="address"
                          className="text-[#344054] font-medium text-sm"
                        >
                          Street Address
                        </label>
                        <Field
                          name="address"
                          type="text"
                          className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="invoice-date w-full flex gap-4">
                        {/* Invoice Date */}
                        <div className="flex flex-col w-full gap-2">
                          <label
                            htmlFor="date"
                            className="text-[#344054] font-medium text-sm"
                          >
                            Invoice Date
                          </label>
                          <Field
                            name="date"
                            type="date"
                            className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          />
                          <ErrorMessage
                            name="date"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                        {/* Payment Terms */}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="description"
                      className="text-[#344054] font-medium text-sm"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      id="description"
                      className="block w-full p-4 border h-full overflow-y-hidden border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Items List */}
                  <FieldArray name="items">
                    {({ push }) => (
                      <>
                        <div className="flex flex-col gap-3 ">
                          <h4 className="text-lg font-bold ">Items List</h4>
                          {values.items.map((item, index) => (
                            <div key={index} className=" ">
                              <div className="flex gap-2 items-center">
                                <div className="md:w-[210px]   ">
                                  <label
                                    htmlFor={`items.name`}
                                    className="text-[#344054] font-medium text-sm"
                                  >
                                    Item Name
                                  </label>
                                  <Field
                                    name={`items.${index}.name`}
                                    type="text"
                                    className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  />
                                  <ErrorMessage
                                    name={`items.${index}.name`}
                                    component="div"
                                    className="text-red-500 text-sm"
                                  />
                                </div>

                                <div className="md:w-[150px]  ">
                                  <label
                                    htmlFor={`items.${index}.quantity`}
                                    className="text-[#344054] font-medium text-sm"
                                  >
                                    Qty.
                                  </label>
                                  <Field
                                    name={`items.${index}.quantity`}
                                    type="number"
                                    className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  />
                                  <ErrorMessage
                                    name={`items.${index}.quantity`}
                                    component="div"
                                    className="text-red-500 text-sm"
                                  />
                                </div>

                                <div className="md:w-[150px]  ">
                                  <label
                                    htmlFor={`items.${index}.price`}
                                    className="text-[#344054] font-medium text-sm"
                                  >
                                    Price
                                  </label>
                                  <Field
                                    name={`items.${index}.price`}
                                    type="number"
                                    className=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  />
                                  <ErrorMessage
                                    name={`items.${index}.price`}
                                    component="div"
                                    className="text-red-500 text-sm"
                                  />
                                </div>
                                {/* Total */}
                                <div className="md:w-[150px]  ">
                                  <label>Total</label>
                                  <div className=" block w-full bg-[#F9FAFB] h-[44px] text-[#667085] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    {values.items[index].quantity > 0 &&
                                    values.items[index].price > 0
                                      ? (
                                          values.items[index].quantity *
                                          values.items[index].price
                                        ).toFixed(2)
                                      : ""}
                                  </div>
                                </div>
                                <div className="mt-5 "></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className=" bg-purple p-2 text-white rounded-lg w-full"
                          onClick={() =>
                            push({ name: "", quantity: 1, price: 0 })
                          }
                        >
                          + Add New Item
                        </button>
                      </>
                    )}
                  </FieldArray>
                </div>
                <div className="">
                  <div className="w-full   rounded-3xl p-6 flex flex-col gap-8 bg-[#d8d8d8]">
                    <h2 className="text-[#101828] text-2xl font-semibold">
                      Preview
                    </h2>
                    <div className="preview-invoice flex flex-col gap-8 rounded-2xl bg-white drop-shadow-2xl p-6">
                      <h4 className="font-semibold text-lg text-[#101828] border-b border-b-[#EAECF0] h-[47px]">
                        New Invoice
                      </h4>

                      {/* Invoice Date and Payment Terms */}
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-4">
                          <label className="text-[#76787D] text-base font-normal">
                            To
                          </label>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.name}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.email}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.address}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.city} {values?.postal}
                          </h4>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.country}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-4 ">
                          <label className="text-[#76787D] text-base font-normal">
                            Invoice Date
                          </label>
                          <h4 className="font-medium text-base text-[#101828]">
                            {values?.date}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <label className="text-[#76787D] text-base font-normal">
                          Message
                        </label>
                        <h4 className="font-medium text-base text-[#101828]">
                          {values?.description}
                        </h4>
                      </div>

                      {/* Items Table */}
                      <table className="table">
                        <thead className="bg-[#f5f5f5] h-[38px] rounded">
                          <tr>
                            <th className="p-2 text-start text-base font-normal text-[#76787D]">
                              Item
                            </th>
                            <th className="p-2 text-start text-base font-normal text-[#76787D]">
                              Qty.
                            </th>
                            <th className="p-2 text-start text-base font-normal text-[#76787D]">
                              Price
                            </th>
                            <th className="p-2 text-base font-normal text-[#76787D] text-end">
                              Total Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {values.items.map((item, index) => (
                            <tr key={index}>
                              <td className="p-2 text-[#101828] text-start text-base font-medium">
                                {item.name}
                              </td>
                              <td className="p-2 text-[#101828] text-start text-base font-medium">
                                {item.quantity}
                              </td>
                              <td className="p-2 text-[#101828] text-start text-base font-medium">
                                {item.price}
                              </td>
                              <td className="p-2 text-[#101828] text-end text-base font-medium">
                                {" "}
                                {values.items[index].quantity > 0 &&
                                values.items[index].price > 0
                                  ? (
                                      values.items[index].quantity *
                                      values.items[index].price
                                    ).toFixed(2)
                                  : ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <hr />

                      {/* Subtotal, Tax, and Total */}
                      <div className="flex flex-col gap-4 items-end w-full">
                        <div className="flex justify-between items-center w-6/12">
                          <h4 className="text-base font-semibold">Subtotal</h4>
                          <h4 className="text-base font-semibold">
                            $
                            <span className="ml-2">
                              {" "}
                              {values.items
                                .reduce(
                                  (acc, item) =>
                                    acc + item.quantity * item.price,
                                  0
                                )
                                .toFixed(2)}
                            </span>
                          </h4>
                        </div>
                        <div className="flex justify-between items-center w-6/12">
                          <h4 className="text-base font-semibold">Tax</h4>
                          <h4 className="text-base font-semibold">10%</h4>
                        </div>
                        <div className="flex justify-between items-center w-6/12">
                          <h4 className="text-xl font-semibold">Total</h4>
                          <h4 className="text-xl font-semibold">
                            $
                            <span className="ml-2">
                              {values.items
                                .reduce(
                                  (acc, item) =>
                                    acc + item.quantity * item.price * 1.1,
                                  0
                                )
                                .toFixed(2)}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default InvoiceForms;
