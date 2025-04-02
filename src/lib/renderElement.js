import { setupEventListeners } from "./eventManager";
import { createElement } from "./createElement";
import { normalizeVNode } from "./normalizeVNode";
// import { updateElement } from "./updateElement";

// vNode를 정규화 한 다음에
// createElement로 노드를 만들고
// container에 삽입하고
// 이벤트를 등록합니다.

//TODO: advanced
// - 최초 렌더링일 때는 createElement 사용
// - 리렌더링일 때는 updateElement 사용

export function renderElement(vNode, container) {
  const normalizedVNode = normalizeVNode(vNode);
  const element = createElement(normalizedVNode);

  // 컨테이너의 내용을 비우고 새로운 요소 추가
  container.innerHTML = "";
  container.appendChild(element);

  // 모든 요소에 대해 이벤트 리스너 설정
  setupEventListeners(container);
}
