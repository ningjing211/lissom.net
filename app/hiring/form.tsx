'use client';
import React, { useState } from "react";
import "@/app/ui/hiring/form.css";

export default function Hiring() {
  // 使用狀態管理表單提交成功訊息
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 表單提交處理函數
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 防止表單的預設提交行為
    setIsSubmitted(true); // 顯示成功訊息

    // 模擬伺服器處理，2 秒後隱藏訊息
    setTimeout(() => {
      setIsSubmitted(false); // 隱藏成功訊息
    }, 2000);
  };

  return (
    // <form action="#" className="form-wrap" onSubmit={handleSubmit}>
    //   {isSubmitted && (
    //     <div
    //       id="formSuccessMessage"
    //       style={{ textAlign: "center", marginTop: 20 }}
    //     >
    //       <div style={{ fontSize: 24, color: "#4CAF50" }}>
    //         Form Submitted Successfully!
    //       </div>
    //       <div className="spinner" style={{ marginTop: 10 }} />
    //     </div>
    //   )}
    <form action="#" className="form-wrap" onSubmit={handleSubmit}>
     {isSubmitted && (
      
        <div
          id="formSuccessMessage"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          <div style={{ fontSize: 24, color: "#4CAF50",
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: '#040404bd' 
          }}>
            {/* Sending.. */}
          </div>
          <div className="spinner" style={{ marginTop: 10 }} />
        </div>
      )}
      <header>
        <h2>Get In Touch</h2>
      </header>
      <div>
        <label className="desc" id="title1" htmlFor="Field1">
          * 姓名 
        </label>
        <div>
          <input
            id="Field1"
            name="Field1"
            type="text"
            className=""
            defaultValue=""
            size={8}
            tabIndex={1}
          />
        </div>
      </div>
      <div>
        <label className="desc" id="title5" htmlFor="Field5">
          * 電話/分機/其他聯絡方式
        </label>
        <div>
          <input
            id="Field5"
            name="Field5"
            type="text" // 單行文字輸入
            placeholder="+886 (07) 555-0123" // 提示文字
            tabIndex={5}
          />
        </div>
      </div>
      <div>
        <label className="desc" id="title3" htmlFor="Field3">
          Email
        </label>
        <div>
          <input
            id="Field3"
            name="Field3"
            type="email"
            spellCheck="false"
            defaultValue=""
            maxLength={255}
            tabIndex={3}
          />
        </div>
      </div>
      <div>
        <label className="desc" id="title106" htmlFor="Field106">
          共好主題
        </label>
        <div>
          <select
            id="Field106"
            name="Field106"
            className="field select medium"
            tabIndex={11}
          >
            <option value="First Choice">加入團隊</option>
            <option value="Second Choice">產品供應</option>
            <option value="Third Choice">品牌互惠</option>
          </select>
        </div>
      </div>
      <div>
        <label className="desc" id="title4" htmlFor="Field4">
          訊息
        </label>
        <div>
          <textarea
            id="Field4"
            name="Field4"
            spellCheck="true"
            rows={10}
            cols={50}
            tabIndex={4}
            defaultValue=""
          />
        </div>
      </div>
      
      <div>
        <fieldset>
          <legend id="title6" className="desc">
            希望被聯絡時段
          </legend>
          <div className="time-wrap">
            <div>
              <input
                id="Field6"
                name="Field6"
                type="checkbox"
                defaultValue="First Choice"
                tabIndex={8}
              />
              <label className="choice" htmlFor="Field6">
                9:00 - 11:00
              </label>
            </div>
            <div>
              <input
                id="Field7"
                name="Field7"
                type="checkbox"
                defaultValue="Second Choice"
                tabIndex={9}
              />
              <label className="choice" htmlFor="Field7">
                13:00 - 15:00
              </label>
            </div>
            <div>
              <input
                id="Field8"
                name="Field8"
                type="checkbox"
                defaultValue="Third Choice"
                tabIndex={10}
              />
              <label className="choice" htmlFor="Field8">
                15:00 - 17:00
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="sub-btn-wrap">
        <input
          id="saveForm"
          className="submit-btn"
          name="saveForm"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
}
