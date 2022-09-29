// type Additional = {
//   taxOffice?: TaxOffice
// }

// type TaxOffice = {
//   tax_2022?: {
//     signature: string
//     data: string
//   }
//   income_2022?: {
//     signature: string
//     data: string
//   }
// }

export type Base = {
  familyname_kanji?: string
  firstname_kanji?: string
  familyname_hurigana_hira?: string
  firstname_hurigana_hira?: string
  familyname_hurigana_kata?: string
  firstname_hurigana_kata?: string
  familyname_hurigana_roman?: string
  firstname_hurigana_roman?: string
  dateofbirth_year?: string
  dateofbirth_month?: string
  dateofbirth_day?: string
  zip_code1?: string
  zip_code2?: string
  prefecture?: string
  municipalities?: string
  town_name?: string
  block_number_kanji?: string
  block_number_kata?: string
  building_name?: string
  email?: string
  tel1?: string
  tel2?: string
  tel3?: string
  tel_landline1?: string
  tel_landline2?: string
  tel_landline3?: string
  school_name?: string
  school_zip_code1?: string
  school_zip_code2?: string
  school_prefecture?: string
  school_municipalities?: string
  school_town_name?: string
  school_block_number?: string
  school_building_name?: string
  school_tel1?: string
  school_tel2?: string
  school_tel3?: string
  tax_2022?: string
  income_2022?: string
  // signature?: string
  // data?: string
  //Additonal?: Additional[]
}

// サイト側は
// const noChangeDataList = [
//   { Additonal: { taxOffice: { tax_2022: { signature: 'aaa', data: '100' } } } },
//   { Additonal: { taxOffice: { income_2022: { signature: 'iii', data: '1000' } } } },
// ]
//サイト側（提供）
const noChangeDataList = [
  { tax_2022: JSON.stringify({ signature: 'aaa', data: '100' }) },
  //{ Additonal: { taxOffice: { income_2022: { signature: 'iii', data: '1000' } } } },
]
//サイト側（もらう）リストに入れるだけ
const dataList = ['tax_2022']
