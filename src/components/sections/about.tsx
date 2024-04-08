import { useRef } from 'react';
import pic1 from '@assets/pic1.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

import './about.scss';

export function About() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref1 });
  const x = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="about" id="about">
      <div className="about_container">
        <motion.div ref={ref1} style={{ right: x }} className="about__h2-motion h2-motion">
          <h2 className="about__h2 h2">О себе</h2>
        </motion.div>
        <motion.div ref={ref2} style={{ opacity }} className="about__img-motion img-motion">
          <img src={pic1} alt="" className="about__img img" />
        </motion.div>
        <div className="about__text-container">
          <div className="about__text-line">
            <div className="dec_item" />
            <p className="about__text text">
              Обладаю высокой адаптивностью и коммуникабельностью, при выполнении учебных проектов
              два раза была руководителем проекта.
            </p>
          </div>
          <div className="about__text-line">
            <div className="dec_item" />
            <p className="about__text text">
              Я целеустремленная, ответственная и всегда ищу возможности для дальнейшего
              профессионального развития.
            </p>
          </div>
          {/* <div className="about__text-line">
            <div className="dec_item" />
            <p className="about__text text">
              Hi! Im Lorem Ipsum! Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
