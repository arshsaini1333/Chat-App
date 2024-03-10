export const handleChange = (event) => {
  console.log(event.target.value);
};
export const handleSubmit = (event) => {
  event.preventDefault();
  alert("Form");
};
