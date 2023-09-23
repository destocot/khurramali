import { useEffect, useState } from "react";
import { FaInstagram, FaAmazon } from "react-icons/fa6";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import recent from "../lib/poems";

export default function PoetryPage() {
  const [poems, setPoems] = useState(recent);
  const [largePoem, setLargePoem] = useState(false);
  const [img, setImg] = useState("/assets/bookpic1.jpg");

  const changeImage = () => {
    if (img === "/assets/bookpic1.jpg") {
      setImg(null);
      setTimeout(() => {
        setImg("/assets/bookpic2.jpg");
      }, 1);
    } else {
      setImg(null);
      setTimeout(() => {
        setImg("/assets/bookpic1.jpg");
      }, 1);
    }
  };

  useEffect(() => {
    // const fetchInstragramPosts = async () => {
    //   const url = `https://graph.instagram.com/${
    //     import.meta.env.VITE_USER_ID
    //   }/media?access_token=${
    //     import.meta.env.VITE_INST_ACCE_CODE
    //   }&fields=media_url&limit=6`;
    //   const res = await fetch(url);
    //   const json = await res.json();
    //   setPoems(json.data);
    // };
    // fetchInstragramPosts();
  }, []);

  return (
    <div className="poetry container">
      <h1 className="poetry__header">Poetry</h1>
      <section className="almts">
        <h2 className="almts__title">A Little More Than Sentiments</h2>
        <Link
          className="external__link"
          to="https://a.co/d/cS4Bw4D"
          target="_blank"
        >
          <FaAmazon className="external__icon" /> check it out on amazon
        </Link>
        <div className="almts__info">
          <div className="small-carousel">
            {img && <img className="almts__img" src={img} alt="" />}
            <FaAngleDoubleLeft
              className="left-arrow"
              onClick={() => changeImage()}
            />
            <FaAngleDoubleRight
              className="right-arrow"
              onClick={() => changeImage()}
            />
          </div>
          <p className="almts__desc">
            A Little More Than Sentiments is the first book that I have made,
            and it is a collection of the first one hundred poems that I have
            written over the past few years. This book takes inspiration from
            both the media I have been grateful to consume as well as the events
            that have happened over the course of my life. The thing that makes
            poetry special is that is truly has no specific form, just like
            every human on this planet. We are all built different. I appreciate
            you holding this book in your hand for even a second, it means the
            world to me. At the end of this book, I have a smaller collection of
            nine poems under what I call Sentiments. These poems represent just
            a fraction of the overwhelming number of emotions that I have inside
            of me these days. These poems that I have written are carved through
            my own depression, happiness, and everything in between. I hope that
            whoever reads my work will be able to find something to relate to
            because just like my writing I feel that the emotions that are
            conveyed in us all are always changing.
          </p>
        </div>
      </section>
      <section className="writings">
        <div>
          <h2 className="writings__title">Other Writings</h2>
          <Link
            className="external__link"
            to="https://www.instagram.com/instrumentalwords/"
            target="_blank"
          >
            <FaInstagram className="external__icon" /> @instrumentalwords
          </Link>
        </div>
        <div className="poems">
          {poems.map((poem) =>
            largePoem ? (
              largePoem === poem.id && (
                <img
                  onClick={() => setLargePoem(null)}
                  className="poem__img-large"
                  key={poem.id}
                  src={poem.media_url}
                  alt=""
                />
              )
            ) : (
              <img
                onClick={() => setLargePoem(poem.id)}
                className="poem__img"
                key={poem.id}
                src={poem.media_url}
                alt=""
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
