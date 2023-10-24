# Écrivez l’algorithme de tri à bulle en pseudo code sur un editeur de code, de texte

A = [8,-2,2,1,0,9,6]
C = [429,74,311,420,212,102,293,487,10,410,395,308,347,130,407,120,122,378,251,458,278,388,326,65,163,231,299,432,48,364,286,181,456,126,271,75,249,78,25,196,81,304,373,7,147,284,216,116,110,164,19,54,70,5,4,259,267,117,489,90,390,442,439,414,151,68,194,156,455,255,18,385,123,157,56,37,419,368,27,468,58,387,335,350,462,15,67,258,322,62,412,29,401,319,158,246,449,128,55,170,314,93,265,300,185,173,343,225,433,411,182,297,204,79,105,352,313,189,478,312,399,497,193,101,203,176,83,192,285,413,274,302,190,188,318,345,49,179,217,139,209,8,333,107,20,66,207,195,281,288,23,261,167,440,341,35,150,415,169,162,206,287,337,400,328,375,144,406,363,237,485,236,262,316,100,392,340,103,447,127,366,423,202,53,381,129,277,353,60,435,135,124,148,438,256,146,47,26,240,226,220,242,197,132,111,403,424,199,16,243,493,428,372,235,40,77,89,405,72,114,149,365,113,228,280,386,362,471,168,434,268,477,396,219,248,417,97,264,131,377,376,92,422,466,479,346,213,11,494,245,140,342,221,119,481,354,143,28,59,63,32,153,499,254,34,361,301,210,445,165,137,13,486,200,244,233,416,315,279,339,208,215,446,463,76,426,252,296,380,184,298,371,142,332,283,329,232,80,152,44,273,310,46,389,223,382,334,484,496,57,134,125,229,172,250,14,266,118,171,96,99,39,22,290,6,159,480,136,393,87,160,52,84,437,218,421,323,12,230,238,257,359,331,263,294,276,465,383,305,370,166,483,178,198,384,82,430,50,38,357,145,108,95,21,309,397,247,470,459,295,24,444,306,452,404,448,86,402,472,253,454,282,492,441,474,205,418,73,41,2,348,358,476,241,469,317,71,227,106,260,211,398,69,338,330,460,457,133,222,191,355,3,495,36,269,270,473,94,461,425,161,498,30,183,239,303,1,31,138,224,121,272,174,344,45,51,9,475,325,491,327,17,488,324,289,88,104,64,367,43,321,356,349,467,379,369,234,443,187,436,112,307,482,490,175,109,275,154,453,91,98,464,180,451,320,186,360,141,450,351,431,409,291,394,155,336,500,177,374,85,214,391,115,42,427,33,61,292,201,408]
print(A)

def tri_a_bulles(tab):
    n = len(tab)
    swap = True
    while swap == True:
        swap = False
        for i in range(0,(n-1)):
            if tab[i] > tab[i+1]:
                swap = True
                tab[i],tab[i+1] = tab[i+1],tab[i]
    return(tab)

print(tri_a_bulles(A))
print(tri_a_bulles(C))

def quick_sort(tab):
    n = len(tab)
    if n <= 1:
        return tab
    else:
        pivot = tab[(n-1)]
        tab_min = []
        tab_max = []
        for i in range(0,(n-1)):
            if tab[i] <= pivot:
                tab_min.append(tab[i])
            else:
                tab_max.append(tab[i])
        return quick_sort(tab_min) + [pivot] + quick_sort(tab_max)

A = [8,-2,2,1,0,9,6]
C = [429,74,311,420,212,102,293,487,10,410,395,308,347,130,407,120,122,378,251,458,278,388,326,65,163,231,299,432,48,364,286,181,456,126,271,75,249,78,25,196,81,304,373,7,147,284,216,116,110,164,19,54,70,5,4,259,267,117,489,90,390,442,439,414,151,68,194,156,455,255,18,385,123,157,56,37,419,368,27,468,58,387,335,350,462,15,67,258,322,62,412,29,401,319,158,246,449,128,55,170,314,93,265,300,185,173,343,225,433,411,182,297,204,79,105,352,313,189,478,312,399,497,193,101,203,176,83,192,285,413,274,302,190,188,318,345,49,179,217,139,209,8,333,107,20,66,207,195,281,288,23,261,167,440,341,35,150,415,169,162,206,287,337,400,328,375,144,406,363,237,485,236,262,316,100,392,340,103,447,127,366,423,202,53,381,129,277,353,60,435,135,124,148,438,256,146,47,26,240,226,220,242,197,132,111,403,424,199,16,243,493,428,372,235,40,77,89,405,72,114,149,365,113,228,280,386,362,471,168,434,268,477,396,219,248,417,97,264,131,377,376,92,422,466,479,346,213,11,494,245,140,342,221,119,481,354,143,28,59,63,32,153,499,254,34,361,301,210,445,165,137,13,486,200,244,233,416,315,279,339,208,215,446,463,76,426,252,296,380,184,298,371,142,332,283,329,232,80,152,44,273,310,46,389,223,382,334,484,496,57,134,125,229,172,250,14,266,118,171,96,99,39,22,290,6,159,480,136,393,87,160,52,84,437,218,421,323,12,230,238,257,359,331,263,294,276,465,383,305,370,166,483,178,198,384,82,430,50,38,357,145,108,95,21,309,397,247,470,459,295,24,444,306,452,404,448,86,402,472,253,454,282,492,441,474,205,418,73,41,2,348,358,476,241,469,317,71,227,106,260,211,398,69,338,330,460,457,133,222,191,355,3,495,36,269,270,473,94,461,425,161,498,30,183,239,303,1,31,138,224,121,272,174,344,45,51,9,475,325,491,327,17,488,324,289,88,104,64,367,43,321,356,349,467,379,369,234,443,187,436,112,307,482,490,175,109,275,154,453,91,98,464,180,451,320,186,360,141,450,351,431,409,291,394,155,336,500,177,374,85,214,391,115,42,427,33,61,292,201,408]
print(quick_sort(A))
print(quick_sort(C))