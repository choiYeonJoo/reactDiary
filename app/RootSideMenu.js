import Link from "next/link";

function RootSideMenu() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            샘플 화면
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/" className="nav-link text-danger">Home</Link>

                <Link href="/Ch04LifeCycle" className="nav-link text-danger">Ch04LifeCycle</Link>
                <Link href="/Ch06Routing/Exam02DynamicRoutes" className="nav-link text-danger">Exam02DynamicRoutes</Link>
                <Link href="/Ch07PerformanceImprovement/Exam04ReactMemo" className="nav-link text-danger">Exam04ReactMemo</Link>
                <Link href="/Ch09RestAPI/Exam04Board/BoardList" className="nav-link text-danger">Exam04Board/BoardList</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootSideMenu;