interface jsonType {
    [key: string]: any;
}

export const FOOD: jsonType = {
    "question" : [
        {
            "type": "radio",
            "question": "맵고 얼큰하게 VS 순한",
            "options" : ["얼큰", "순한"]
        },
        {
            "type": "radio",
            "question": "밥 VS 면",
            "options" : ["밥", "면"]
        },
        {
            "type": "radio",
            "question": "국물 VS 국물X",
            "options" : ["국물", "국물X"]
        },
        {
            "type": "radio",
            "question": "따듯한 VS 차가운",
            "options" : ["따듯한", "차가운"]
        }
    ],
    "answer" : {
        "0000" : ["육개장"],
        "0001" : [],
        "0010" : ["김치볶음밥"],
        "0011" : [],
        "0100" : ["탄탄면"],
        "0101" : ["불냉면"],
        "0110" : ["쫄면"],
        "0111" : ["비빔냉면"],
        "1000" : ["순대국"],
        "1001" : [],
        "1010" : ["리조또", "덮밥", "볶음밥"],
        "1011" : ["비빔밥"],
        "1100" : ["쌀국수"],
        "1101" : ["물냉면"],
        "1110" : ["파스타"],
        "1111" : ["메밀소바", "분짜"]
        
    }

}