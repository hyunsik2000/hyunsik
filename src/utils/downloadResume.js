// src/utils/downloadResume.js

/**
 * 이력서 다운로드 함수
 * @param {string} fileName - 다운로드될 파일명 (기본값: '류현식_이력서.pdf')
 * @param {string} filePath - 이력서 파일 경로 (기본값: '/src/assets/resume/류현식_이력서.pdf')
 */
export const downloadResume = (
  fileName = '류현식_프론트엔드_이력서.pdf',
  filePath = 'assets/resume/류현식_프론트엔드_이력서.pdf'
) => {
  try {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    
    // 링크를 DOM에 추가
    document.body.appendChild(link);
    
    // 프로그래밍적으로 클릭
    link.click();
    
    // 링크 제거
    document.body.removeChild(link);
    
    console.log(`이력서 다운로드 시작: ${fileName}`);
    return true;
  } catch (error) {
    console.error('이력서 다운로드 중 오류 발생:', error);
    return false;
  }
};

/**
 * 여러 파일 형식의 이력서 다운로드 (선택적)
 * @param {string} format - 파일 형식 ('pdf', 'docx', 'doc')
 */
export const downloadResumeByFormat = (format = 'pdf') => {
  const fileConfigs = {
    pdf: {
      fileName: '류현식_프론트엔드_이력서.pdf',
      filePath: 'assets/resume/류현식_프론트엔드_이력서.pdf'
    }
  };

  const config = fileConfigs[format.toLowerCase()];
  
  if (!config) {
    console.error(`지원하지 않는 파일 형식: ${format}`);
    return false;
  }

  return downloadResume(config.fileName, config.filePath);
};

/**
 * 파일 존재 여부 확인 (선택적)
 * @param {string} filePath - 확인할 파일 경로
 */
export const checkFileExists = async (filePath) => {
  try {
    const response = await fetch(filePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('파일 존재 확인 중 오류:', error);
    return false;
  }
};