import React from 'react';

const projects = require('json!./../../json/data.json');

const Data = function Data() {
  return (
    <a href="#1" key={projects.id}>
      <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
        <p>Project #1</p>
        <img role="presentation" src="./img/three_dee/SD_02.jpg" />
      </div>
    </a>
  );
};

const Work = function Work() {
  return (
    <section className="text--center" id="work">
      <div className="grid">
        <a href="#1">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #1</p>
            <img role="presentation" src="./img/three_dee/SD_02.jpg" />
          </div>
        </a>
        <a href="#2">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #2</p>
            <img role="presentation" src="./img/three_dee/SD_03.jpg" />
          </div>
        </a>
        <a href="#3">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #3</p>
            <img role="presentation" src="./img/three_dee/SD_04.jpg" />
          </div>
        </a>
        <a href="#4">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #4</p>
            <img role="presentation" src="./img/three_dee/SD_05.jpg" />
          </div>
        </a>
      </div>
      <div className="grid">
        <a href="#4">
          <div className="grid__item desk--one-half lap--one-whole palm--one-whole image">
            <p>Project #5</p>
            <img role="presentation" src="./img/three_dee/SD_01.jpg" />
          </div>
        </a>
        <div className="grid__item desk--one-half lap--one-whole palm--one-whole">
          <div className="chamber-triple--sides">
            <p className="typography--gamma">Herringbone</p>
            <p className="typography--regular">Been working on a very detailed wood generator, which I recently finished, so I figured I'd better use it for something. Thus the herringbone floor was created.</p>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid__item desk--one-half lap--one-whole palm--one-whole">
          <div className="chamber-triple--sides">
            <p className="typography--gamma">Herringbone</p>
            <p className="typography--regular">Been working on a very detailed wood generator, which I recently finished, so I figured I'd better use it for something. Thus the herringbone floor was created.</p>
          </div>
        </div>
        <a href="#4">
          <div className="grid__item desk--one-half lap--one-whole palm--one-whole image">
            <p>Project #5</p>
            <img role="presentation" src="./img/three_dee/SD_01.jpg" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Work;
