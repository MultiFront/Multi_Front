import React from 'react';

  function Certification() {
    function onClickCertification() {
      /* 1. 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init('imp73566686');

      /* 2. 본인인증 데이터 정의하기 */
      const data = {
        merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
        company: '랫플',                           // 회사명 또는 URL
        carrier: 'LGU+',                              // 통신사
        name: '이강현',                                // 이름
        phone: '01090605190'                       // 전화번호
      };

      /* 4. 본인인증 창 호출하기 */
      IMP.certification(data, callback);
    }

    /* 3. 콜백 함수 정의하기 */
    function callback(response) {
      const {
        success,
        merchant_uid,
        error_msg
      } = response;

      if (success) {
        alert('본인인증 성공');
      } else {
        alert(`본인인증 실패: ${error_msg}`);
      }
    }

    return (
      <button onClick={onClickCertification}>본인인증 하기</button>
    );
  }

  export default Certification