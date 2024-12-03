import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContainer, Header, ImagesContainer, ImageBox,
    ProductDetailInfo
 } from "./MarketStyle";
 import { InputContainer } from "./MarketStyle";

const MarketBuy = () => {
    const {id} = useParams();
    const [account, setAccount] = useState(0);
    const [mileage, setMileage] = useState(1000);
    const [useMileage, setUseMileage] = useState(0);
    const [ProductCost, setProductCost] = useState(10000);
    const calculate = () => {
        if (mileage < useMileage) {
            alert('마일리지 금액을 초과했습니다.');
        }
        if (account < (ProductCost - useMileage)) {
            alert('보유 금액이 부족합니다.');
        }
        else {
            alert('구매 완료했습니다.');
        }
    }
    return (
        <PageContainer>
          {/* 상단 영역 */}
          <Header>
            <h2>상품 구매</h2>
          </Header>
    
          {/* 상품 정보 */}
          <ProductDetailInfo style={{alignItems:'center'}}>
            <ImagesContainer>
                <ImageBox>Image</ImageBox>
                <ImageBox>Image</ImageBox>
                <ImageBox>Image</ImageBox>
            </ImagesContainer>
            <p>상품 이름 : (product_name)</p>
            <p>판매자 : (seller_id)</p>
            <p>상태 : (status)</p>
            <p>가격 : (product_price)</p>
          </ProductDetailInfo>
          {/* 상품 설명 */}
          <ProductDetailInfo style={{justifyContent: 'center', flexDirection: 'column'}}>
            <InputContainer>
                <p>배송지 입력</p>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="배송지를 입력해주세요"
                    required
                    style={{ width: "80%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
            </InputContainer>
            <InputContainer>
                <p>상세주소</p>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="주소를 입력해주세요"
                    required
                    style={{ width: "80%", padding: "8px", marginTop: "5px", margin: '20px'}}
                />
            </InputContainer>
          </ProductDetailInfo>
          <ProductDetailInfo style={{justifyContent: 'center', flexDirection: 'column'}}>
            <InputContainer style={{justifyContent: 'flex-start'}}>
                <p>보유 잔액</p>
                <input
                    type="text"
                    placeholder={account.toLocaleString('ko-KR') + ' 원'}
                    disabled
                    style={{ width: "50%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
            </InputContainer>
            <InputContainer style={{justifyContent: 'flex-start'}}>
                <p>보유 마일리지</p>
                <input
                    type="text"
                    placeholder={mileage.toLocaleString('ko-KR') + ' 원'}
                    disabled
                    style={{ width: "50%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
            </InputContainer>
            <InputContainer style={{justifyContent: 'flex-start'}}>
            <p>사용할 마일리지</p>
                <input
                    type="number"
                    value={useMileage}
                    onChange={(e) => setUseMileage(e.target.value)}
                    required
                    style={{ width: "50%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
            </InputContainer>
          </ProductDetailInfo>

          <ProductDetailInfo style={{marginBottom: '200px', flexDirection: 'column'}}>
            <InputContainer style={{justifyContent: 'flex-start'}}>
                <p>상품 금액</p>
                <input
                    type="text"
                    placeholder={ProductCost.toLocaleString('ko-KR') + ' 원'}
                    disabled
                    style={{ width: "30%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
                <p>할인 금액</p>
                <input
                    type="text"
                    placeholder={useMileage.toLocaleString('ko-KR') + ' 원'}
                    disabled
                    style={{ width: "30%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
                <p>결제 금액</p>
                <input
                    type="text"
                    placeholder={ProductCost - useMileage + ' 원'}
                    disabled
                    style={{ width: "30%", padding: "8px", marginTop: "5px", margin: '20px' }}
                />
            </InputContainer>
            <button style={{width: '50%', height: '50px'}} onClick={calculate}>결제</button>
          </ProductDetailInfo>
    
          {/* 버튼 */}
        </PageContainer>
    )
    
}

export default MarketBuy;