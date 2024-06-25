import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <div className="container pb-10">
          <h1
            className="inline-block border-l-8 
        border-primary/50 py-2 pl-2 mb-4 
        text-xl font-bold sm:text-3xl"
          >
            Location to visit
          </h1>
          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476883.8580574084!2d106.45186802877846!3d20.96635984880301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a583f825ff2c9%3A0xc5d143510be28d44!2zVHAuIEjhuqEgTG9uZywgUXXhuqNuZyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1719332069497!5m2!1svi!2s"
              frameBorder="0"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
