import { Main } from "../layout/component/main";
import styled from "@emotion/styled";

export default function About() {
  return (
    <Main>
      <section>
        <h3>Who am I?</h3>
        <p>
          이것저것 경험하며 개발 환경을 알아가고 있습니다 <br />
          섣불리 개발 분야를 정하기보다는
          <br />
          주니어답게 직접 느껴보고 정하려 합니다
        </p>
      </section>

      <section>
        <article>
          <h4>Tech Stack</h4>
          <h5>Frontend</h5>
          <p>React, CSS</p>

          <h5>Backend</h5>
          <p>
            Server : Flask, FastAPI, NodeJS, PHP <br />
            SQL : MySQL, GraphQL Deploy : AWS Lambda, Step Function, AWS EC2
            (PM2)
          </p>

          <h5>Computer Vision</h5>
          <p>
            App : Python (subprocess, OpenCV) <br />
            Machine Learning : Pytorch, Tensorflow, FastAPI
          </p>
        </article>
      </section>

      <section>
        <h3>Where am I?</h3>
        <p>
          머신러닝에 관심을 갖고 시작하여 <br />
          이제는 머신러닝을 보여주고 구동하는 면에 <br />더 큰 관심을 가지고
          있습니다
        </p>
      </section>

      <section>
        <article>
          <h4>Language</h4>
          <h5>Python</h5>
          <p>
            가장 편하게 다루는 언어 <br />
            빠르게 생산해야할 때 주로 이용
          </p>

          <h5>Typescript</h5>
          <p>웹 개발을 염두할 때 이용</p>

          <h5>GraphQL</h5>
          <p>
            단기 프로젝트 시 이용 <br />
            거대해질 수록 사용을 줄이는 편
          </p>
        </article>
      </section>
    </Main>
  );
}
