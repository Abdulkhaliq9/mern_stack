import * as Yup from "yup";
export const InvoiceValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  postal: Yup.string().required("Postal Code is required"),
  address: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
 
  date: Yup.date().required("Invoice Date is required"),
  description: Yup.string().required("Project Description is required"),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Item Name is required"),
      quantity: Yup.number().positive().integer().required("Qty is required"),
      price: Yup.number().positive().required("Price is required"),
    })
  ),
});

