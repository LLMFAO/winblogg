export function getWindowPosition(isMobile: boolean) {
  if (isMobile) {
    return { x: 5, y: 5 }; // 5px margin for mobile
  }
  
  return {
    x: 50 + Math.random() * 100,
    y: 50 + Math.random() * 100
  };
}

export function getWindowSize(isMobile: boolean, windowSize: { width: number; height: number }) {
  if (isMobile) {
    return {
      width: windowSize.width - 10, // 5px margin on each side
      height: windowSize.height - 10 // 5px margin on each side
    };
  }
  
  return {
    width: 600,
    height: 400
  };
}
