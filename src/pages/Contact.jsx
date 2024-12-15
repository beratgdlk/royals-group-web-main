

function Contact() {
  return (
    <>
      <div className="container my-5 py-5">
        <h1>Bize Ulaşın!</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="text-start">
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-geo-alt "
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  Şahintepe Mahallesi Türker Caddesi, Kartal Sk. No:10, 
                  34494  Başakşehir/İstanbul
                </p>
              </div>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-phone me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  +90 530 287 70 02
                </p>
              </div>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-envelope me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  info@royalsgroup.com.tr
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <form action="https://formsubmit.co/" method="POST">
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                      Adınız Soyadınız
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Adınız Soyadınız..."
                      name="name" // Değiştirildi
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fs-5">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone" // Değiştirildi
                      required
                      placeholder="Telefon Numaranız..."
                      name="phone" // Değiştirildi
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-5">
                      Email
                    </label>
                    <input
                      type="email" // Değiştirildi
                      id="email" // Değiştirildi
                      required
                      placeholder="Email..."
                      name="email" // Değiştirildi
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fs-5">
                      Mesajınız
                    </label>
                    <textarea
                      id="message" // Değiştirildi
                      required
                      cols={10}
                      rows={5}
                      placeholder="Mesajınız..."
                      name="message" // Değiştirildi
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-send">
                    Gönder
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
