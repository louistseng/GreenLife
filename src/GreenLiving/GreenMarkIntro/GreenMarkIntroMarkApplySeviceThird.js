import React, { useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../GreenLabel.css'
import './GreenMarkLazy.css'
import markBannerSmall from '../../images1/img/banner_mark_small.jpg';
import servicelazy from '../../images1/greenLiving/Servicelazy03.jpg'

const BreadCrumb = React.lazy(() => import('../../Components/BreadCrumb'));
const Footer = React.lazy(() => import('../../Components/Footer'));

function GreenMarkIntroMarkApplySeviceThird(props) {
    let SSL = props.SSL//props.domain.includes("eri") ? "https:" : props.SSL
    let domainFormal = "greenliving.epa.gov.tw/newPublic"//props.domain.includes("eri") ? "greenliving.eri.com.tw/PublicRwd" : "greenliving.epa.gov.tw/newPublic"
    let domainBackendFormal = "greenliving.epa.gov.tw"//props.domain.includes("eri") ? "greenliving.eri.com.tw" : "greenliving.epa.gov.tw"

    {/*跳至指定標籤*/ }
    let anchorId = window.location.href.slice(window.location.href.indexOf("#") + 1)
    const a1 = useRef(null);
    const a2 = useRef(null);
    useEffect(() => {
        if (anchorId === "a1") {
            a1.current.scrollIntoView({ behavior: "smooth" });
        }
        else if (anchorId === "a2") {
            a2.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

    return (
        <>
            <BreadCrumb currentPage="【標章申請資訊與指引】服務類-需要符合什麼條件" />
            <div className=""><img src={markBannerSmall} className="w-100 banner" alt="服務類-需要符合什麼條件" /></div>
            <div className="">{/*  */}
                <div className="div-flex-wrap green-row mt-2 justify-content-center">
                    <div className="col-lg-2 col-md-12 col-12">
                        <div className="row leftbtn justify-content-between">
                            <Link to={`/greenLabel/GreenMarkIntroMarkApplySeviceIndex`}><div className="col-12 col-md-6 col-lg-12">回到懶人包</div></Link>
                            <Link to={`/greenLabel/GreenMarkIntroMarkApplySeviceFirst`}><div className="col-12 col-md-6 col-lg-12">為什麼要申請？</div></Link>
                            <Link to={`/greenLabel/GreenMarkIntroMarkApplySeviceSecond`}><div className="col-12 col-md-6 col-lg-12">有誰申請了？</div></Link>
                            <Link to={`/greenLabel/GreenMarkIntroMarkApplySeviceThird`} className="leftbtnFocus"><div className="col-12 col-md-6 col-lg-12">需要符合什麼條件？</div></Link>
                            <Link to={`/greenLabel/GreenMarkIntroMarkApplySeviceFourth`}><div className="col-12 col-md-6 col-lg-12">要怎麼申請？</div></Link>
                            <Link to={`/greenLabel/GreenMarkIntroMarkApply`}><div className="col-12 col-md-6 col-lg-12">標章申請指引</div></Link>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-12 bigpic">
                        <div className="row ">
                            <div className="col-12 div-flex topbtn justify-content-between">
                                <Link to={`/greenLabel/GreenMarkIntroMarkApply`}><div>環保標章申請資訊與指引</div></Link>
                                <Link to={`/greenLabel/GreenMarkIntroMarkApplySeviceIndex`}><div>服務類申請指引</div></Link>
                            </div>
                            <div id="a1" ref={a1} className="col-12 greenbar">
                                <h1>檢視是否符合基本資格</h1>
                            </div>
                            <div className="col-12 bluebar mt-2 mb-2 text-center">
                                <img src={servicelazy} className="w-100" alt="檢視是否符合基本資格" />
                            </div>

                            <div id="a2" ref={a2} className="col-12 greenbar">
                                <h2>看看想申請的規格標準</h2>
                            </div>
                            <div className="col-12 bluebar mt-2 mb-2">
                                <div id="fordummiesWRAP">
                                    <div className="fordummiesQ2" style={{ minHeight: "260px" }}>
                                        <ul>
                                            <li className="btnA2a"><Link to={`/categories/GreenSpecificationSearch?searched=true&page=1&a=1&k=旅館業&ctn=14&cn=14&y=&m=`} target="_blank"><span>旅館業</span></Link></li>
                                            <li className="btnA2b"><Link to={`/categories/GreenSpecificationSearch?searched=true&page=1&a=1&k=餐館業&ctn=14&cn=14&y=&m=`} target="_blank"><span>餐館業</span></Link></li>
                                            <li className="btnA2c"><Link to={`/categories/GreenSpecificationSearch?searched=true&page=1&a=1&k=育樂場所&ctn=14&cn=14&y=&m=`} target="_blank"><span>育樂場所</span></Link></li>
                                            <li className="btnA2d"><Link to={`/categories/GreenSpecificationSearch?searched=true&page=1&a=1&k=旅行業&ctn=14&cn=14&y=&m=`} target="_blank"><span>旅行業</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default withRouter(GreenMarkIntroMarkApplySeviceThird);
