export const applyOpacity = (color: string, opacity: number): string => {
  if (color.startsWith('#')) {
    const sanitizedHex = color.replace('#', '');
    const bigint = parseInt(sanitizedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  
  if (color.startsWith('rgb')) {
    return color.replace(/rgb(a?)\(([^)]+)\)/, (_, __, rgbValues) => 
      `rgba(${rgbValues.trim()}, ${opacity})`
    );
  }

  return `rgba(0, 0, 0, ${opacity})`;
};