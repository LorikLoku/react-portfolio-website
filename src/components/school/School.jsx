import React from 'react'
import './school.css'
import { BiBookAlt } from "react-icons/bi";
import { FaGraduationCap } from 'react-icons/fa'

const School = () => {
  return (
    <section id="school">
      <h5>What I Have Learned</h5>
      <h2>School</h2>

      <div className="container schools__container">
        <article className="school">
          <div className="school__head">
            <h3>Primary School</h3>
          </div>

          <ul className="school__list">
            <li>
              <FaGraduationCap className="school__list-icon" />
              <p>"Emin Duraku" Primary School</p>
            </li>
            <li>
              <br />
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Technology</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>English</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Mathematics</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Music</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Art etc.</p>
            </li>
          </ul>
        </article>

        <article className="school">
          <div className="school__head">
            <h3>Secondary School</h3>
          </div>

          <ul className="school__list">
            <li>
              <FaGraduationCap className="school__list-icon" />
              <p>"Skenderbeu" Secondary School</p>
            </li>
            <li>
              <br />
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Technology</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Mathematics</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Physics</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Chemistry</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Biology etc.</p>
            </li>
          </ul>
        </article>

        <article className="school">
          <div className="school__head">
            <h3>University</h3>
          </div>

          <ul className="school__list">
            <li>
              <FaGraduationCap className="school__list-icon" />
              <p>"UBT" - Computer Sciences</p>
            </li>
            <li>
              <br />
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Problem Solving Techniques</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Java</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Algorithms</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Databases</p>
            </li>
            <li>
              <BiBookAlt className="school__list-icon" />
              <p>Discrete Maths etc.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default School