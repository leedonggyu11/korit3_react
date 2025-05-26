function MainComponent() {
  return (
    <main className="main">
      <section className="section">
        <h2 className="section__title">About Me</h2>
        <p>
          안녕하세요 저는 코리아아이티아카데미 국비 과정으로 풀스택 과정을 수료한 김일이라고 합니다.
          최근에 리액트를 이용한 프론트엔드에도 흥미를 가지고 있어 풀스택 개발자 과정에 지망하게 되었습니다.
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Experience</h2>
        <ul>
          <li>
            <strong>2025.03 - 현재</strong> 코리아아이티아카데미 풀스택 과정 수료<br />
            - Spring Boot를 이용한 REST API 설계 및 구현<br />
            - MariaDB, H2 인메모리 DB를 통한 ORM 관리 역량<br />
            - Java, JavaScript, SQL 사용 역량
          </li>
          <li>
            <strong>2021.03 - 2025.02</strong> 런던왕립대학교 Computer Science 졸업<br />
            - React 라이브러리<br />
            - Spring Framework<br />
            - Lambda / Arrow Expression
          </li>
        </ul>
      </section>
    </main>
  );
}

export default MainComponent;
