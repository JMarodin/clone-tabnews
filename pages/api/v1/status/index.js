function status(request, response) {
  response.status(200).json({ chave: "alegria" });
}

export default status;
