import { useState } from "react";

/**
 * useState와 onChange를 합친 커스텀 훅. 전개연산자를 통해 태그에 바로 적용
 * @param {string} initialValue 초기 데이터(문자열)
 * @returns { value, setValue, onChange} - const content = useStateOnChange("");  <input {...content} />로 사용
 */
function useStateOnChange(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, onChange];
}

export default useStateOnChange;
