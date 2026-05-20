// =============== بيانات الصفوف (1-4 + 5-12 من الروابط المقدمة) ===============
const gradeNames = {1:"الأول",2:"الثاني",3:"الثالث",4:"الرابع",5:"الخامس",6:"السادس",7:"السابع",8:"الثامن",9:"التاسع",10:"العاشر",11:"الحادي عشر",12:"الثاني عشر (توجيهي)"};
const booksDB = {};

// --- الصف الأول والثاني والثالث والرابع (محفوظة بالكامل) ---
booksDB[1] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G01/MA.01.ST.BOOK_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G01/2/MT01/SE/MA.01.ST2.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/1/%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%2025%20-%205.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/1/P2/%D8%A7%D9%88%D9%84%20-%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%812%20.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G1/2/G1-Islamic.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D9%88%D9%84%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%D9%81%20%D8%A3%D9%88%D9%84%20%D8%AC2%20.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G1/1/Is%20G1%20P1%202025%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G1/2/G1-Islamic.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G1/JOR%20TT%20G1%20S1%20Reprints%20PB%20Print%20Updated.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G1/2/JOR-TT-G1-S2-Reprints-2025-Activity-Book-Updated.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G1/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%A7%D9%94%D9%88%D9%84-%D9%811-%20%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G1/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%A7%D9%94%D9%88%D9%84-%D9%811-%20%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf" }
};
booksDB[2] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G02/MA.02.ST.BOOK_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G02/2/MT02/SE/MA.02.ST_2025.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/2/%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%D9%81%20%D8%AB%D8%A7%D9%86%D9%8A%20%2012%20-%205%20%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D9%87%20%D9%811.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/2/P2/%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%812%20.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%86%D9%8A/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%86%D9%8A%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%86%D9%89%20%D8%AC2%20.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G2/1/Deen_SE2_T1.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G2/2/Islamic-G2-SE2.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G2/JOR%20TT%20G2%20S1%20Pupils%20Book%20Print%20Updated%202.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G2/2/Jordan-Team%20Together-G2-SB-S2.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G2/1/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%AB%D8%A7%D9%86%D9%8A%20%D9%811%202025%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G2/2/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%AB%D8%A7%D9%86%D9%8A%20%D9%812%202025%20.pdf" }
};
booksDB[3] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G03/MA.03.ST_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G03/2/MT03/SE/MA.03.ST2.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/3/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%20%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/3/P2/%D8%AB%D8%A7%D9%84%D8%AB%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%812.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%84%D8%AB/%E2%81%A8%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%84%D8%AB%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20%E2%81%A9%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%84%D8%AB%20%D9%812%20Pdf/%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%84%D8%AB%20%D8%AC2%20.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G3/1/Islamic_G3_SE1.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G3/2/Islamic_G3_SE2.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G3/JOR%20TT%20G3%20S1%20Reprints%20PB%20Print.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G3/2/JOR-TT-G3-S2-Reprints-2025-Pupils-Book-Updated.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G3/1/%D8%AC-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB-%D9%811%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G3/2/%D8%AC-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB-%D9%812%D9%86%D9%87%D8%A7%D8%A6%D9%8A%20.pdf" }
};
// الصف الرابع (إضافة جميع الروابط المقدمة)
booksDB[4] = {
  "التربية الإسلامية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G4/1/Grade%204%20T1.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G4/2/islamic%20Grade%204.pdf" },
  "الرياضيات": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G04/MA.04.ST.BOOK_WEB.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G04/2/MT04/SE/Math%2004.pdf" },
  "العلوم": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B1%D8%A7%D8%A8%D8%B9/%D8%B9%D9%84%D9%88%D9%85%20%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%AC2.pdf" },
  "اللغة العربية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/4/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%811%20%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D9%87%2020-%205%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/4/P2/%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%B7%D8%A7%D9%84%D8%A8%20.pdf" },
  "الدراسات الاجتماعية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G4/1/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%811%20%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G4.2/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%812.pdf" },
  "التربية المهنية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/4/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20-%20%D9%811-%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/4/2/%D9%85%D9%87%D9%86%D9%8A%20%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%812%202025%20.pdf" },
  "اللغة الإنجليزية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G4/JOR%20TT%20G4%20S1%20Pupils%20Book%20Print%20Updated.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G4/2/Jordan-Team%20Together-G4-SB%20S2.pdf" }
};

// --- الصف الخامس (جميع الروابط المقدمة) ---
booksDB[5] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G05/MA.05.ST.Book_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G05/2/MT05/SE/MT05_SE2_WEB.pdf" },
  "التربية المهنية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/5/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20-%20%D9%811.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/5/2/%D9%85%D9%87%D9%86%D9%8A%20%D8%AE%D8%A7%D9%85%D8%B3%20%D9%812%202025%20.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G5/1/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D9%811-%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G5/2/%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D9%812.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G5/JOR%20TT%20G5%20S1%20Reprints%20PB%20Print%20Updated.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G5/2/JOR-TT-G5-S2-Reprints-2025-Pupils-Book-Updated.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/5/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D9%811%20%D8%A7%D9%84%D8%B7%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9%2017%20-%205%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/5/P2/%D8%AE%D8%A7%D9%85%D8%B3%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%812%20.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AE%D8%A7%D9%85%D8%B3/%D8%B9%D9%84%D9%88%D9%85%20%D8%AE%D8%A7%D9%85%D8%B3%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AE%D8%A7%D9%85%D8%B3%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G5/1/Islamic%20T1%20Grade%205.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G5/2/Islamic%205P2%20new.pdf" }
};
// الصف السادس (جميع الروابط)
booksDB[6] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G06/MT06_SE1_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G06/2/MT06/SE/MT06_SE2_WEB.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G6/1/%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D9%811%20(1).pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G6/2/-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D9%812.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/6/6TH%20EXE%20BOOK%20bleed.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/6/PART2/6th%20II%20Student.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G6/JOR%20TT%20G6%20S1%20Pupils%20Book%20Print.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G6/2/Jordan-Team%20Together-G6-SB-S2.pdf" },
  "التربية المهنية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/6/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20F1.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/6/2/%D9%85%D9%87%D9%86%D9%8A%20%D8%B3%D8%A7%D8%AF%D8%B3%20%D9%812%202025%20.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G6/1/Islamic%206T1.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G6/2/Islamic%20G6%20P2.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%AF%D8%B3/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%AF%D8%B3%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf" }
};
// الصف السابع (جميع الروابط المقدمة)
booksDB[7] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G07/MT07_SE1_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G07/7/MT07/SE/MT07_SE2.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%A8%D8%B9/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%A8%D8%B9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%A8%D8%B9%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/7/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%D9%811%20%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%2015-5.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/7/P2/%D8%B3%D8%A7%D8%A8%D8%B9%20-%20%D8%B7%D8%A7%D9%84%D8%A8%20-%20%D9%812.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G7/JOR%20TT%20G7%20S1%20Reprints%20PB%20Print%20Updated.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G7/2/JOR-TT-G7-S2-Reprints-2025-Pupils-Book-Updated.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G7/1/Grade%207%20p1%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G7/2/Grade%20G7%20P2%20.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G7/1/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B7%20%20%D9%811-%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G7/2/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%20%D9%812.pdf" },
  "المهارات الرقمية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G7/1/G7%20Digital%20Skills%20S1%20SB%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G7/2/G7%20Digital%20Skills%20StB%20P2%20U3%20.pdf" },
  "الثقافة المالية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G7/1/%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%207%20%D9%811%20small%20file%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A/Financial_7_S2.pdf" },
  "التربية المهنية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/7/2025%20%D9%86%D9%87%D8%A7%D9%8A%D9%94%D9%8A-%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%D9%81%201.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/7/2/%D9%85%D9%87%D9%86%D9%8A%20%D8%B3%D8%A7%D8%A8%D8%B9%20%D9%812%202025%20.pdf" }
};
// الصف الثامن (جميع الروابط)
booksDB[8] = {
  "الرياضيات": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G08/MT08_SE1_WEB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G08/MT08/SE/Grade_08.pdf" },
  "العلوم": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%85%D9%86/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%85%D9%86%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%85%D9%86%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%AB%D8%A7%D9%85%D9%86%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf" },
  "اللغة العربية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/8/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%20%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%2017-%205%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/8/P2/%D8%AB%D8%A7%D9%85%D9%86%20-%20%D8%B7%D8%A7%D9%84%D8%A8%20-%20%D9%812%20.pdf" },
  "اللغة الإنجليزية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G8/JOR%20HN%20G8%20S1%20Students%20Book%20Print.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G8/2/Jordan%20High%20Note%20G8%20SB%20S2.pdf" },
  "التربية الإسلامية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G8/1/Islamieh%20G8%20P1%202025%20.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G8/2/Islamic_G8_SE2.pdf" },
  "الدراسات الاجتماعية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G8/1/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%20%D9%811_%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G8/2/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%20%D9%812%20(1).pdf" },
  "التربية المهنية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/8/2024%20%D9%86%D9%87%D8%A7%D9%8A%D9%94%D9%8A-%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%D9%81%201-%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/8/2/%D9%85%D9%87%D9%86%D9%8A%20%D8%AB%D8%A7%D9%85%D9%86%20%D9%812%202025%20.pdf" },
  "المهارات الرقمية": { s1:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G8/1/G8%20Digital%20Skills%20S1%20SB.pdf", s2:"https://nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G8/2/G8%20Digital%20Skills%20S2%20SB%20(1).pdf" }
};
// الصف التاسع (جميع الروابط المقدمة - ملخص)
booksDB[9] = {
  "الرياضيات": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G09/MT09_SE1_Book_WEB.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G09/2/MT09/SE/MT09_SE2_WEB.pdf" },
  "اللغة العربية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/9/9th%20Book%20student.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/9/P2/%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812.pdf" },
  "التربية الإسلامية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G9/1/Islamic%20T1%20Grade%209.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G9/2/islamic%20G9%20P2%20.pdf" },
  "الفيزياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D8%A7%D8%B3%D8%B9/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20S/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%20Pdf/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%20Pdf/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%AC2%20.pdf" },
  "الكيمياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D8%A7%D8%B3%D8%B9/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20S/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%20Pdf/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%20Pdf/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%209%20%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20.pdf" },
  "علوم الأرض": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D8%A7%D8%B3%D8%B9/%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D8%B1%D8%B6%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20S/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/New%20folder%20(2)/%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D8%B1%D8%B6%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%AC%D9%A2%20.pdf" },
  "اللغة الإنجليزية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G9/JOR%20HN%20G9%20S1%20Reprints%20SB%20Print%20Updated%20Bleed%205mm.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G9/2/JOR-HN-G9-S2-Reprints-2025-Students-Book-Updated.pdf" },
  "المهارات الرقمية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G9/1/G9%20Digital%20Skills%20S1%20SB%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G9/2/G9%20Digital%20Skills%20S2%20SB%20U3%20.pdf" },
  "الجغرافيا": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G9/1/%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7-%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9-%D9%811%20(1).pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G9/2/2/%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7-%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9-%D9%812-Low.pdf" },
  "الثقافة المالية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G9/1/%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%209%20%D9%811%20small%20file.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G9/2/Financial_9_S2.pdf" },
  "التربية الوطنية والمدنية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G9/1/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%811%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G9/2/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9_%D9%88%D8%A7%D9%84%D9%85%D8%AF%D9%86%D9%8A%D8%A9_%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9_%D9%812_.pdf" },
  "التاريخ": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G9/1/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9_%D9%811.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G9/2/2/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9_%D9%812-Low.pdf" },
  "التربية المهنية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/9/2025%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9%20-%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%81%201.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9/9/2/%D9%85%D9%87%D9%86%D9%8A%20%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%812%202025%20.pdf" }
};
// الصف العاشر والحادي عشر والثاني عشر (جميع الروابط المقدمة - ملخص)
booksDB[10] = {
  "الرياضيات": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G10/Math%2010%20Book_WEB.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G10/2/MT10/SE/MT_10_SE2_web.pdf" },
  "التربية الإسلامية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G10/1/Grade%2010%20Book%201.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G10/2/islamic%20Grade%2010.pdf" },
  "العلوم الحياتية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1/%D8%A3%D8%AD%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%811%20S/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf" },
  "الفيزياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%811%20S/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf" },
  "الكيمياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%811%20S/%20%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%2010%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20.pdf" },
  "علوم الأرض": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1/%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D8%B1%D8%B6%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%811%20S/%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D8%B1%D8%B6%2010%20%D8%B7%D8%A7%D9%84%D8%A8%20%D9%811%20S%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/New%20folder/%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D8%B1%D8%B6%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20Pdf/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D8%B1%D8%B6%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20.pdf" },
  "التربية الوطنية والمدنية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G10/1/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%811-%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G10/2/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20.pdf" },
  "اللغة العربية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/10/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%20%D8%A7%D9%94%D8%AE%D9%8A%D8%B1%D8%A7%20%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A7%D8%A1.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/10/P2/%D8%B7%D8%A7%D9%84%D8%A8%20-%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%812%20.pdf" },
  "اللغة الإنجليزية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G10/JOR%20HN%20G10%20S1%20Students%20Book%20Print%20Updated.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G10/2/Jordan%20High%20Note%20G10%20SB%20S2.pdf" },
  "المهارات الرقمية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G10/1/Digital%20Skills%20S1%20G10%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G10/2/Digital%20Skills%20S2%20G10_V2%20(1).pdf" },
  "الجغرافيا": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G10/1/-%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7-%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1-%D9%811%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"" },
  "التاريخ": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G10/1/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1_%D8%A7%D9%95%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%D9%80%20%D9%811%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"" }
};
booksDB[11] = {
  "تاريخ الأردن": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G11/1/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86%20%D8%A7%D9%84%D8%A7%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A-%D9%811.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G11/2/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%A7%D9%94%D8%B1%D8%AF%D9%86-%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D9%94%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A-%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9-2025-.pdf" },
  "التربية الإسلامية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G11/1/islamic%20C11%20P1%20all%20Branches%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G11/2/islamic%20C11%20P2%20.pdf" },
  "اللغة العربية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/11/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D9%811%20%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%2025-5.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/11/PART2/AR11P2.pdf" },
  "المهارات الرقمية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G11/1/Digital%20Skills%20G11%20SB%20S1.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G11/2/Digital%20Skills%20S2%20G11.pdf" },
  "اللغة الإنجليزية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2024/G11/JOR_HN_G11_Student's_Book_Print.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G11/2/JOR-HN-G11-S2-Reprints-2025-Students-Book-Updated.pdf" },
  "الرياضيات": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G11/1/NEW_MT11_SE1_WEB.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G11/2/Grade%2011%20Academic/ST/NEW_MT11_SE2.pdf" },
  "الفيزياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G11/1/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%A3%D9%88%D9%84%202025%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/G11%20New/Science/%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1/part2/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%AC%D8%AF%D9%8A%D8%AF%20.pdf" },
  "الكيمياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G11/1/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/G11%20New/Science/%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1/part2/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%AB%D8%A7%D9%86%D9%8A%20%D8%AC%D8%AF%D9%8A%D8%AF%20.pdf" },
  "العلوم الحياتية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G11/1/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF%20%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/G11%20New/Science/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9/part2/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%AC%D8%AF%D9%8A%D8%AF%20%20(1).pdf" },
  "علوم الأرض": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G11/1/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D8%A3%D9%88%D9%84%20%D8%AB%D8%A7%D9%86%D9%88%D9%8A%20%D8%AC%D8%B2%D8%A1%20%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/G11%20New/Science/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9/part2/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D9%80%D9%A2%20%D8%AC%D8%AF%D9%8A%D8%AF%20.pdf" },
  "الثقافة المالية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G11/1/%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%2011%20%D9%811%20small%20file.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G11/2/%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%2011%20%D9%812.pdf" }
};
booksDB[12] = {
  "التاريخ": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G12/1/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1-%D9%811.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G12/2/2/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1-%D9%812-Low.pdf" },
  "الجغرافيا": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7/12/%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7-%20%D8%A7%D9%84%D8%B5%D9%8112-%D9%811.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/SS/G12/2/2/%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7-%20%D8%A7%D9%84%D8%B5%D9%8112-%D9%812%20%D9%85%D8%B9%D8%AF%D9%84%D8%A9-Low%20(1).pdf" },
  "الرياضيات": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G12/1/NEW_MT12_SE1_WEB.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G12/2/Grade%2012%20Academic/ST/WEB_MT12_SE2.pdf" },
  "الفيزياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/1/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF%20%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/2/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1/%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%AB%D8%A7%D9%86%D9%8A%202025%20.pdf" },
  "الكيمياء": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/1/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF%20M%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/2/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1/%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1%20%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%202025%20.pdf" },
  "العلوم الحياتية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/1/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/2/%D8%B9%D9%84%D9%88%D9%85%20%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D9%87/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%202025.pdf" },
  "علوم الأرض": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/1/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%20%D8%AC%D8%B1%D8%A1%20%D8%A3%D9%88%D9%84%20%D8%AC%D8%AF%D9%8A%D8%AF%20.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Science/2025/G12/2/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%A7%D9%94%D8%B1%D8%B6%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%20%D8%AC%D8%B1%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%202025%20.pdf" },
  "رياضيات الأعمال": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/A3mal/A3mal_ST1_Proof9.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Math/2025/G12%20Business/2/ST/A3mal_ST2_WEB.pdf" },
  "اللغة الإنجليزية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G12/1/Jordan-High%20Note-G12-S1-SB.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/EN/2025/G12/2/Jordan%20High%20Note%20G12%20SB%20S2.pdf" },
  "التربية الإسلامية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G12/1/Islamic%20Grade%2012%20P1%2018_5%20final.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Islam/Islam/2025/G12/2/Islamic%20Grade%2012%20Part%202%2029_6.pdf" },
  "المهارات الرقمية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G12/1/Digital%20Skills%20S1%20G12.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/G12/2/Digital_Skills_S2_G12.pdf" },
  "علوم النفس والاجتماع": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%86%D9%81%D8%B3%20%D9%88%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9/12/29.6.2025%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%86%D9%81%D8%B3%20%D9%88%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9/12/p2/L2.pdf" },
  "الفلسفة": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9/1/%D9%81%D9%84%D8%B3%D9%81%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9/2/%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9_-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A_%D8%B9%D8%B4%D8%B1-%D9%812.pdf" },
  "الثقافة المالية": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G12/1/%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%2012%20%D9%811%20small%20file.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/%D9%85%D8%A7%D9%84%D9%8A%D8%A9/G12/2/Financial_12_S2.pdf" },
  "الأدب": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/12/arabic%2012%20alzawahir%20aladabia%20226.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/12/PART2/AR12D2.pdf" },
  "النحو والصرف وموسيقا الشعر": { s1:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/12/arabic%20alnahw%20walsarf%20C12P1%20236.pdf", s2:"https://www.nccd.gov.jo/EBV4.0/Root_Storage/AR/Arabic/2025/%D8%B9%D8%B1%D8%A8%D9%8A%206.7.2025/12/PART2/AR12N2%20.pdf" }
};

// دوال النظام الأساسية
function getBookUrl(g, s, sem) {
  return booksDB[g]?.[s]?.[sem === 1 ? 's1' : 's2'] || `https://nccd.gov.jo/ar/pages/TextBooksGrade/${[68,69,70,71,72,73,74,75,76,77,117,83][g-1]}`;
}
function openBook(g, s, sem) {
  let url = getBookUrl(g, s, sem);
  if (url && url !== "") {
    window.open(url, '_blank');
    if (url.includes('TextBooksGrade')) alert(`📘 صفحة NCCD للصف ${gradeNames[g]}، ابحث عن "${s}" فصل ${sem === 1 ? 'الأول' : 'الثاني'}.`);
  } else {
    alert(`عذراً، الرابط غير متوفر حالياً لمادة ${s} في الصف ${gradeNames[g]}.`);
  }
}
function showPage(p) {
  document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
  document.getElementById(`page-${p}`).classList.add('active');
  if (p === 'grades') buildGradesList();
  if (p === 'it') buildITContent();
  if (p === 'games') buildGamesList();
  window.scrollTo(0, 0);
}
function buildGradesList() {
  let h = '';
  for (let i = 1; i <= 12; i++) {
    h += `<div class="grade-card" onclick="openGradeDetail(${i})"><div style="font-size:48px;">📚</div><h3>الصف ${gradeNames[i]}</h3><span style="background:#e6b42220; padding:4px 12px; border-radius:30px;">فصل أول وثاني</span></div>`;
  }
  document.getElementById('allGradesContainer').innerHTML = h;
}
function openGradeDetail(grade) {
  document.getElementById('gradeDetailTitle').innerHTML = `الصف ${gradeNames[grade]} – جميع المواد`;
  let subs = booksDB[grade] ? Object.keys(booksDB[grade]) : [];
  let booksHtml = '';
  subs.forEach(sub => {
    let d = booksDB[grade][sub];
    booksHtml += `<div class="book-card"><div style="background:linear-gradient(135deg,var(--primary),#2c5a8c);border-radius:24px;padding:12px;"><i class="fas fa-book" style="font-size:36px;"></i></div><h3>${sub}</h3><div style="display:flex; gap:10px; justify-content:center; margin:10px 0;">${d.s1 ? `<button class="btn-small" onclick="openBook(${grade}, '${sub}', 1)">📖 الفصل الأول</button>` : ''}${d.s2 ? `<button class="btn-small" style="background:#c9961b;" onclick="openBook(${grade}, '${sub}', 2)">📖 الفصل الثاني</button>` : ''}</div><div class="extra-link" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(`كتاب ${sub} الصف ${gradeNames[grade]} الأردن pdf`)}','_blank')">🔍 بحث بديل</div></div>`;
  });
  document.getElementById('gradeBooksGrid').innerHTML = booksHtml || '<div class="book-card">📘 سيتم إضافة الروابط قريباً</div>';
  let wsHtml = '', ytHtml = '';
  let subjectsForRes = subs.length ? subs : ["الرياضيات", "اللغة العربية", "العلوم", "اللغة الإنجليزية", "التربية الإسلامية", "الدراسات الاجتماعية"];
  subjectsForRes.forEach(s => {
    let searchTerm = `أوراق عمل ${s} الصف ${gradeNames[grade]} الأردن`;
    wsHtml += `<div class="resource-card" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(searchTerm)}','_blank')"><i class="fas fa-file-alt"></i><h3>${s}</h3><p>تمارين وتدريبات متنوعة</p><div class="btn-small">📄 عرض الأوراق</div></div>`;
    let ytSearch = `شرح ${s} الصف ${gradeNames[grade]} الأردن`;
    ytHtml += `<div class="resource-card" onclick="window.open('https://www.youtube.com/results?search_query=${encodeURIComponent(ytSearch)}','_blank')"><i class="fab fa-youtube"></i><h3>${s}</h3><p>دروس ومراجعات شاملة</p><div class="btn-small">▶️ مشاهدة القنوات</div></div>`;
  });
  document.getElementById('gradeWorksheetsGrid').innerHTML = wsHtml;
  document.getElementById('gradeChannelsGrid').innerHTML = ytHtml;
  showPage('grade-detail');
}
function buildITContent() {
  document.getElementById('itFullGrid').innerHTML = `
    <div class="resource-card" onclick="window.open('https://code.org/','_blank')"><i class="fas fa-code"></i><h3>Code.org</h3><p>تعلم البرمجة مجاناً</p><div class="btn-small">ابدأ</div></div>
    <div class="resource-card" onclick="window.open('https://www.w3schools.com/','_blank')"><i class="fab fa-html5"></i><h3>W3Schools</h3><p>مرجع ويب شامل</p><div class="btn-small">استكشف</div></div>
    <div class="resource-card" onclick="window.open('https://www.khanacademy.org/','_blank')"><i class="fas fa-chalkboard-teacher"></i><h3>Khan Academy</h3><p>علوم الحاسب والرياضيات</p><div class="btn-small">دروس</div></div>
    <div class="resource-card" onclick="window.open('https://www.edx.org/','_blank')"><i class="fas fa-university"></i><h3>edX</h3><p>دورات جامعية</p><div class="btn-small">سجل</div></div>
    <div class="resource-card" onclick="window.open('https://www.youtube.com/c/ElzeroWebSchool','_blank')"><i class="fab fa-youtube"></i><h3>قناة الزيرو</h3><p>شرح برمجة عربي</p><div class="btn-small">شاهد</div></div>
    <div class="resource-card" onclick="window.open('https://www.coursera.org/','_blank')"><i class="fas fa-graduation-cap"></i><h3>Coursera</h3><p>تخصصات تقنية</p><div class="btn-small">تصفح</div></div>
    <div class="resource-card" onclick="window.open('https://www.freecodecamp.org/','_blank')"><i class="fab fa-free-code-camp"></i><h3>FreeCodeCamp</h3><p>تمارين عملية</p><div class="btn-small">تحدى</div></div>
    <div class="resource-card" onclick="window.open('https://zainalshalalfeh.github.io/Library-it1/','_blank')"><i class="fas fa-database"></i><h3>مكتبة IT المتخصصة</h3><p>كتب الأمن السيبراني والذكاء الاصطناعي</p><div class="btn-small">استعرض</div></div>
    <div class="resource-card" onclick="window.open('https://www.microsoft.com/ar-sa/learning','_blank')"><i class="fab fa-microsoft"></i><h3>Microsoft Learn</h3><p>مسارات شهادات احترافية</p><div class="btn-small">تعلّم</div></div>
    <div class="resource-card" onclick="window.open('https://www.udacity.com/','_blank')"><i class="fas fa-laptop"></i><h3>Udacity</h3><p>نانو ديجري في التكنولوجيا</p><div class="btn-small">انطلق</div></div>
  `;
}
function buildGamesList() {
  let gamesArr = [
    { name: "🧠 لعبة الذاكرة", desc: "تطابق البطاقات", link: "https://www.memozor.com/ar/games/memory-games" },
    { name: "🔢 سباق الرياضيات", desc: "حل مسائل سريعة", link: "https://www.coolmathgames.com/0-run" },
    { name: "⚡ تحدي السرعة", desc: "ردود فعل سريعة", link: "https://humanbenchmark.com/tests/reactiontime" },
    { name: "📚 الثقافة العامة", desc: "أسئلة متنوعة", link: "https://kahoot.it/" },
    { name: "♟️ شطرنج", desc: "العب ضد الكمبيوتر", link: "https://lichess.org/" },
    { name: "💻 تحدي البرمجة", desc: "أسئلة برمجية", link: "https://www.w3schools.com/quiztest/" },
    { name: "🤖 الذكاء الاصطناعي", desc: "اكتشف الذكاء الاصطناعي", link: "https://quickdraw.withgoogle.com/" },
    { name: "🔐 الأمن السيبراني", desc: "تعلم الأمن", link: "https://cybersecuritytec.lovable.app" },
    { name: "🎓 Kahoot AI", desc: "مدخل الذكاء الاصطناعي", link: "https://create.kahoot.it/details/2259b9b0-ac08-4c5c-96f7-85978b921ace" },
    { name: "✨ Digital Sparkle", desc: "حملة الأمان الرقمي", link: "https://digital-sparkle-safari.lovable.app" },
    { name: "📚 خطتي الدراسية", desc: "منظم ذكي", link: "https://isha-s-study-buddy.lovable.app/study-plan" },
    { name: "❌ XO تعليمية", desc: "إدارة المشاريع", link: "https://learnhip.com/tictactoe/game.php?w=b773b1e3" },
    { name: "🔊 Bouncing Balls", desc: "مستوى الضوضاء", link: "https://share.google/BpNPP0rMjb9qHll8L" }
  ];
  let html = '';
  gamesArr.forEach(g => {
    html += `<div class="game-tile" style="background:white;" onclick="window.open('${g.link}','_blank')"><i class="fas fa-gamepad" style="font-size:48px;"></i><h3>${g.name}</h3><p>${g.desc}</p><span class="btn-small">العب الآن</span></div>`;
  });
  document.getElementById('gamesGrid').innerHTML = html;
}

// الشات بوت
function openChat() { document.getElementById('chatWindow').style.display = 'flex'; }
function closeChat() { document.getElementById('chatWindow').style.display = 'none'; }
function addMessage(t, s) {
  let c = document.getElementById('chatMessagesArea');
  let d = document.createElement('div');
  d.style.margin = '8px';
  d.style.textAlign = s === 'user' ? 'left' : 'right';
  d.style.background = s === 'user' ? '#e0f0ea' : '#f9efdc';
  d.style.padding = '8px 14px';
  d.style.borderRadius = '24px';
  d.style.maxWidth = '85%';
  d.style.float = s === 'user' ? 'left' : 'right';
  d.style.clear = 'both';
  d.innerHTML = `<strong>${s === 'user' ? '👤' : '🤖'}:</strong> ${t}`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}
function sendChatMsg() {
  let inp = document.getElementById('chatInputField');
  let q = inp.value.trim();
  if (!q) return;
  addMessage(q, 'user');
  inp.value = '';
  let lower = q.toLowerCase();
  let response = "";
  let gradeMatch = null;
  let subjectMatch = null;
  for (let g = 1; g <= 12; g++) if (lower.includes(gradeNames[g]) || lower.includes(`الصف ${gradeNames[g]}`)) { gradeMatch = g; break; }
  const subjects = ["رياضيات", "عربية", "علوم", "إنجليزية", "إسلامية", "اجتماعيات", "فيزياء", "مهنية", "تكنولوجيا", "حاسوب"];
  for (let s of subjects) if (lower.includes(s)) {
    if (s === "رياضيات") subjectMatch = "الرياضيات";
    else if (s === "عربية") subjectMatch = "اللغة العربية";
    else if (s === "علوم") subjectMatch = "العلوم";
    else if (s === "إنجليزية") subjectMatch = "اللغة الإنجليزية";
    else if (s === "إسلامية") subjectMatch = "التربية الإسلامية";
    else if (s === "اجتماعيات") subjectMatch = "الدراسات الاجتماعية";
    else if (s === "فيزياء") subjectMatch = "الفيزياء";
    else if (s === "مهنية") subjectMatch = "التربية المهنية";
    else if (s === "تكنولوجيا" || s === "حاسوب") subjectMatch = "المهارات الرقمية";
    break;
  }
  if (gradeMatch && subjectMatch) response = `✅ يوجد كتاب ${subjectMatch} للصف ${gradeNames[gradeMatch]}، اضغط على الصف ثم اختر المادة والفصل المطلوب.`;
  else if (gradeMatch) response = `📚 الصف ${gradeNames[gradeMatch]} يحتوي على مواد: ${Object.keys(booksDB[gradeMatch] || {}).join("، ")}. اختر الصف من القائمة.`;
  else if (subjectMatch) response = `📘 مادة ${subjectMatch} متوفرة لجميع الصفوف. اختر الصف المناسب من قائمة الصفوف.`;
  else if (lower.includes("أوراق عمل")) response = "📄 يمكنك اختيار الصف ثم الضغط على تبويب 'أوراق عمل'.";
  else if (lower.includes("يوتيوب")) response = "🎥 اذهب إلى تبويب 'قنوات يوتيوب' بعد اختيار الصف.";
  else response = "🔍 مرحباً! أنا AishaBot. اسألني عن مادة أو صف، مثل: 'كتاب العلوم الصف السابع'.";
  addMessage(response, 'bot');
}

// المساعد الصوتي
let recognition = null;
function openVoice() { document.getElementById('voiceWindow').style.display = 'block'; }
function closeVoice() { document.getElementById('voiceWindow').style.display = 'none'; if (recognition) recognition.abort(); }
function startVoice() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) { document.getElementById('voiceFeedback').innerHTML = "❌ المتصفح لا يدعم الميكروفون، استخدم Chrome."; return; }
  recognition = new SpeechRec();
  recognition.lang = 'ar-JO';
  recognition.onstart = () => { document.getElementById('voiceFeedback').innerHTML = "🎙️ استمع... تحدث الآن"; };
  recognition.onerror = (e) => { document.getElementById('voiceFeedback').innerHTML = `⚠️ خطأ: ${e.error}`; };
  recognition.onresult = (e) => {
    let cmd = e.results[0][0].transcript;
    document.getElementById('voiceFeedback').innerHTML = `🎤 سمعت: "${cmd}"`;
    processVoiceCommand(cmd);
  };
  recognition.start();
}
function processVoiceCommand(cmd) {
  const gradeMap = { "الأول": 1, "الثاني": 2, "الثالث": 3, "الرابع": 4, "الخامس": 5, "السادس": 6, "السابع": 7, "الثامن": 8, "التاسع": 9, "العاشر": 10, "الحادي عشر": 11, "الثاني عشر": 12, "توجيهي": 12 };
  let grade = null, subject = null, sem = 1;
  for (let [k, v] of Object.entries(gradeMap)) if (cmd.includes(k)) { grade = v; break; }
  const subs = ["رياضيات", "عربية", "علوم", "إنجليزية", "إسلامية", "اجتماعيات", "فيزياء"];
  for (let s of subs) if (cmd.includes(s)) {
    if (s === "رياضيات") subject = "الرياضيات";
    else if (s === "عربية") subject = "اللغة العربية";
    else if (s === "علوم") subject = "العلوم";
    else if (s === "إنجليزية") subject = "اللغة الإنجليزية";
    else if (s === "إسلامية") subject = "التربية الإسلامية";
    else if (s === "اجتماعيات") subject = "الدراسات الاجتماعية";
    else if (s === "فيزياء") subject = "الفيزياء";
    break;
  }
  if (cmd.includes("الثاني") || cmd.includes("ثاني")) sem = 2;
  if (grade && subject && booksDB[grade]?.[subject]) { closeVoice(); openBook(grade, subject, sem); }
  else if (grade) { closeVoice(); openGradeDetail(grade); }
  else { document.getElementById('voiceFeedback').innerHTML = "💡 مثال: 'كتاب الرياضيات الصف السادس الفصل الثاني'"; }
}
document.getElementById('voiceStartBtn')?.addEventListener('click', startVoice);
document.getElementById('secureContactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('contactName').value.trim();
  let email = document.getElementById('contactEmail').value.trim();
  let msg = document.getElementById('contactMessage').value.trim();
  if (!name || !email || !msg) { alert("الرجاء ملء جميع الحقول"); return; }
  let subject = `رسالة من ${name} عبر Aisha Edu`;
  let body = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالرسالة:\n${msg}`;
  window.location.href = `mailto:9802032365@ajyal.jo?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  alert("سيتم فتح بريدك الإلكتروني لإرسال الرسالة. شكراً لتواصلك!");
  document.getElementById('secureContactForm').reset();
});

// حركة بسيطة للأزرار
function animateHomeButton() {
  const btns = document.querySelectorAll('.nav-link, .logo-area, .btn-primary, .grade-card');
  btns.forEach(btn => {
    if (btn.onclick && btn.onclick.toString().includes('showPage')) {
      btn.style.transform = 'scale(0.98)';
      setTimeout(() => { btn.style.transform = ''; }, 150);
    }
  });
}

// إمكانية الوصول
const accessBtn = document.getElementById('accessMainBtn');
const accessPanelDiv = document.getElementById('accessPanel');
accessBtn.addEventListener('click', () => { if (accessPanelDiv.style.display === 'flex') accessPanelDiv.style.display = 'none'; else accessPanelDiv.style.display = 'flex'; });
document.getElementById('contrastBtn')?.addEventListener('click', () => { document.body.classList.toggle('high-contrast'); });
document.getElementById('increaseFont')?.addEventListener('click', () => { let cur = parseFloat(getComputedStyle(document.body).fontSize); document.body.style.setProperty('--font-size', (cur + 2) + 'px'); document.body.style.fontSize = (cur + 2) + 'px'; });
document.getElementById('decreaseFont')?.addEventListener('click', () => { let cur = parseFloat(getComputedStyle(document.body).fontSize); if (cur > 12) document.body.style.setProperty('--font-size', (cur - 2) + 'px'); document.body.style.fontSize = (cur - 2) + 'px'; });
document.getElementById('resetFont')?.addEventListener('click', () => { document.body.style.removeProperty('font-size'); document.body.style.setProperty('--font-size', '1rem'); });
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(this.getAttribute('data-tab')).classList.add('active');
  });
});
window.addEventListener('DOMContentLoaded', function() {
  let loader = document.getElementById('loader');
  if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 300); }
  showPage('home');
  buildGamesList();
});
