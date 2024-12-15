import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { PageContainer, Header, ImagesContainer, ImageBox,
    ProductDetailInfo
 } from "./MarketStyle";
 import { InputContainer } from "./MarketStyle";

const MarketBuy = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const productInfo = state?.productInfo || {};
    const {id} = useParams();
    const [account, setAccount] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [useMileage, setUseMileage] = useState(0);
    const [ProductCost, setProductCost] = useState(0);
    const [shippingAddress, setShippingAddress] = useState('');
    const calculate = async() => {
        if (mileage < useMileage) {
            alert('마일리지 금액을 초과했습니다.');
        }
        if (account < (ProductCost - useMileage)) {
            alert('보유 금액이 부족합니다.');
        }
        else {
            alert('구매 완료했습니다.');
        }
        const response = await fetch('http://localhost:8080/rest/purchaseProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                buyerId: localStorage.getItem('id'), // 구매자 ID (예시)
                sellerId: productInfo.seller_id, // 판매자 ID
                productUid: id, // 상품 UID
                transactionAmount: productInfo.product_price, // 거래 금액
                usedMileage: useMileage, // 사용한 마일리지
                shippingAddress: shippingAddress // 배송 주소 (예시)
            })
        });
        if (response) {
            const data = await response.json();
            console.log(data);
            navigate('/market');
        }
    }
    const getAmount = async () => {
        try {
            const response = await fetch(`http://localhost:8080/rest/getAmountAndMileage`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: localStorage.getItem('id') // 서버가 'uid'로 요청을 처리하도록 수정
              })
            });
            if (response.ok) {
              const data = await response.json();
              console.log(data);
              setAccount(data.amount);
              setMileage(data.mileage);
               // 수정: 서버가 ProductResponse를 바로 반환하므로 data 사용
            } else {
              console.error('Error fetching product info');
            }
          } catch (error) {
            console.error('Failed to fetch product info:', error.message);
          }
    }
    useEffect(()=> {
        getAmount();
        setProductCost(productInfo.product_price);
    },[])
    return (
        <PageContainer>
          {/* 상단 영역 */}
          <Header>
            <h2>상품 구매</h2>
          </Header>
    
          {/* 상품 정보 */}
          <ProductDetailInfo style={{alignItems:'center'}}>
            <ImagesContainer>
                <ImageBox>{productInfo.product_image}</ImageBox>
            </ImagesContainer>
            <p>상품 이름 : {productInfo.product_name}</p>
            <p>판매자 : {productInfo.seller_id}</p>
            <p>상태 : 판매중</p>
            <p>가격 : {productInfo.product_price}</p>
          </ProductDetailInfo>
          {/* 상품 설명 */}
          <ProductDetailInfo style={{justifyContent: 'center', flexDirection: 'column'}}>
            <InputContainer>
                <p>배송지 입력</p>
                <input
                    type="text"
                    id="name"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    placeholder="배송지를 입력해주세요"
                    required
                    style={{ width: "80%", padding: "8px", marginTop: "5px", margin: '20px' }}
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