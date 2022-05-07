import React from 'react';
import './index.scss';

const speakings = [
    {
        subTitle: '我们是谁',
        title: '创业企业家',
        content: '作为复星旗下专注于国内外资产管理和股权投资的专业机构，我们要以“小复星”作为定位，永远不要忘记复星最为宝贵的创业精神。复星的企业家精神需要我们每一个人去学习并恪守。我们是懂得自我驱动、自我闭环的不断成长的智慧生命体。'
    },
    {
        subTitle: '我们是做什么的',
        title: '价值创造者',
        content: '我们要做价值的创造者，为自己、为公司、为社区、为国家创造价值。复星人把致力于中国经济与文化的复兴作为使命，我们所做的一切都要符合这个使命，通过多样化的投资方式，让资源得到更有效的利用，以创造价值作为唯一的目标。',
    },
    {
        subTitle: '我们该如何做',
        title: '创新和开放',
        content: '资本市场中唯一不变的就是变化，我们要不断提高能力、放开格局，以创新的思维、敢于自我否定的态度和开放的心态去做事，从负债端到资产端、从一级市场到二级市场、从夹层投资到固定收益、从私人银行到产业基金。思想有多远，路就会有多宽！'
    }
];

const ChuangfuValues = () => (
    <div className="chuangfu-values">
        <div className="chuangfu-values-hd">
            <div className="founder-speaking">
                <div className="founder-speaking-hd">创始人致辞</div>
                <div className="founder-speaking-bd">
                    <div className="founder-speaking-avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="founder-speaking-list">
                        {
                            speakings.map((speaking, index) => (
                                <div className="founder-speaking-list-item" key={index}>
                                    <small className="sub-title">{ speaking.subTitle }</small>
                                    <h3 className="main-title">{ speaking.title }</h3>
                                    <p className='content'>{ speaking.content }</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="chuangfu-values-bd">
            <div className="chuangfu-values-slogan">
                <h3 className="chuangfu-values-slogan-main">创业、创造、创新、开放</h3>
                <small className='chuangfu-values-slogan-sub'>这就是一个复星创富人的标签。</small>
                <p className="chuangfu-values-slogan-content">投资需要的是判断、需要的是克服人性的弱点，投资公司没有技术壁垒、没有专利壁垒，我们唯一的资产就是人才，希望各位同学在复星这个大平台上得到成长、起飞。你的世界有多大，完全取决于你可以飞多高！这既是一个传播复星资本品牌的地方，更是一个你可以展示才华的地方！已经有了起点，不要辜负这个时代给你的机会！</p>
                <div className="chuangfu-values-slogan-founder-signature">【！！这里放签名】</div>
            </div>
        </div>
    </div>
);

export default ChuangfuValues;