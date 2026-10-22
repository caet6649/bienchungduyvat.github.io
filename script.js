// Bộ câu hỏi được tổng hợp từ tài liệu ôn tập phép biện chứng duy vật.
// Dữ liệu câu hỏi được khai báo trong biến QUESTIONS ở đầu file này.
const QUESTIONS = [
  {
    "id": 1,
    "question": "Phép biện chứng duy vật được khái quát chính xác nhất là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Học thuyết cho rằng mọi sự vật tồn tại biệt lập và bất biến."
      },
      {
        "letter": "B",
        "text": "Học thuyết về mối liên hệ phổ biến và sự phát triển, đồng thời là phương pháp luận chung nhất cho nhận thức và thực tiễn."
      },
      {
        "letter": "C",
        "text": "Phương pháp chỉ nghiên cứu những biến đổi trong tư duy cá nhân."
      },
      {
        "letter": "D",
        "text": "Học thuyết giải thích thế giới chỉ bằng ý niệm hoặc tinh thần."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "B",
    "explanation": "Phép biện chứng duy vật nghiên cứu mối liên hệ phổ biến và sự phát triển, đồng thời cung cấp phương pháp luận chung nhất cho nhận thức và thực tiễn."
  },
  {
    "id": 2,
    "question": "Phát biểu nào phân biệt đúng biện chứng khách quan và biện chứng chủ quan?",
    "options": [
      {
        "letter": "A",
        "text": "Biện chứng khách quan là tư duy của con người; biện chứng chủ quan là sự vận động của vật chất."
      },
      {
        "letter": "B",
        "text": "Cả hai đều chỉ những ý tưởng do con người tự đặt ra."
      },
      {
        "letter": "C",
        "text": "Biện chứng khách quan chỉ có trong tự nhiên, còn biện chứng chủ quan chỉ có trong xã hội."
      },
      {
        "letter": "D",
        "text": "Biện chứng khách quan thuộc về thế giới vật chất; biện chứng chủ quan là sự phản ánh biện chứng khách quan trong tư duy và quá trình tư duy."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "D",
    "explanation": "Biện chứng khách quan thuộc thế giới vật chất; biện chứng chủ quan phản ánh biện chứng khách quan trong tư duy."
  },
  {
    "id": 3,
    "question": "Trình tự nào nêu đúng ba hình thức chủ yếu của phép biện chứng trong lịch sử triết học theo tài liệu?",
    "options": [
      {
        "letter": "A",
        "text": "Biện chứng tự phát thời cổ đại – biện chứng duy tâm – biện chứng duy vật."
      },
      {
        "letter": "B",
        "text": "Biện chứng duy vật – biện chứng tự phát – biện chứng duy tâm."
      },
      {
        "letter": "C",
        "text": "Biện chứng duy tâm – biện chứng duy vật – biện chứng tự phát."
      },
      {
        "letter": "D",
        "text": "Biện chứng thực nghiệm – biện chứng tôn giáo – biện chứng duy vật."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "A",
    "explanation": "Theo tài liệu, ba hình thức chủ yếu là biện chứng tự phát thời cổ đại, biện chứng duy tâm và biện chứng duy vật."
  },
  {
    "id": 4,
    "question": "Một chức năng quan trọng của phép biện chứng duy vật là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Thay thế việc nghiên cứu thực tế bằng suy luận thuần túy."
      },
      {
        "letter": "B",
        "text": "Đưa ra một công thức cố định để giải quyết mọi vấn đề mà không cần xét hoàn cảnh."
      },
      {
        "letter": "C",
        "text": "Cung cấp phương pháp luận chung nhất định hướng hoạt động nhận thức và thực tiễn."
      },
      {
        "letter": "D",
        "text": "Chỉ mô tả những sự kiện đã xảy ra mà không giúp định hướng hành động."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "C",
    "explanation": "Phép biện chứng duy vật định hướng cách suy nghĩ và hành động, không thay thế việc nghiên cứu hiện thực cụ thể."
  },
  {
    "id": 5,
    "question": "Nhận định nào đúng về vận động và phát triển?",
    "options": [
      {
        "letter": "A",
        "text": "Mọi phát triển đều là vận động, nhưng không phải mọi vận động đều là phát triển."
      },
      {
        "letter": "B",
        "text": "Mọi vận động đều là phát triển theo hướng tiến bộ."
      },
      {
        "letter": "C",
        "text": "Phát triển chỉ là sự tăng lên về số lượng."
      },
      {
        "letter": "D",
        "text": "Phát triển luôn diễn ra theo đường thẳng, không có bước thụt lùi tạm thời."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "A",
    "explanation": "Phát triển là một dạng vận động theo khuynh hướng đi lên; vận động nói chung không phải lúc nào cũng là phát triển."
  },
  {
    "id": 6,
    "question": "Ba tính chất cơ bản của mối liên hệ được nêu trong tài liệu là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Chủ quan, bất biến và đơn tuyến."
      },
      {
        "letter": "B",
        "text": "Tuyệt đối, tuyến tính và đồng nhất."
      },
      {
        "letter": "C",
        "text": "Ngẫu nhiên, chủ quan và tách biệt."
      },
      {
        "letter": "D",
        "text": "Khách quan, phổ biến, đa dạng và phong phú."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "D",
    "explanation": "Mối liên hệ có tính khách quan, phổ biến và đa dạng, phong phú."
  },
  {
    "id": 7,
    "question": "Quan điểm toàn diện yêu cầu điều gì khi xem xét một sự vật?",
    "options": [
      {
        "letter": "A",
        "text": "Coi mọi yếu tố đều có vai trò ngang nhau trong mọi hoàn cảnh."
      },
      {
        "letter": "B",
        "text": "Xem xét tổng thể các mối liên hệ vốn có, đồng thời xác định mối liên hệ bản chất và chủ yếu để tập trung giải quyết."
      },
      {
        "letter": "C",
        "text": "Chỉ lựa chọn những dữ kiện ủng hộ kết luận ban đầu."
      },
      {
        "letter": "D",
        "text": "Tách sự vật khỏi các điều kiện và sự vật có liên quan."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "B",
    "explanation": "Quan điểm toàn diện xem xét tổng thể các mối liên hệ nhưng vẫn cần xác định mối liên hệ bản chất, chủ yếu."
  },
  {
    "id": 8,
    "question": "Vận dụng quan điểm lịch sử, cụ thể có nghĩa là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Dùng một kết luận duy nhất cho mọi sự vật trong mọi thời điểm."
      },
      {
        "letter": "B",
        "text": "Chỉ xem xét nguồn gốc quá khứ mà bỏ qua điều kiện hiện tại."
      },
      {
        "letter": "C",
        "text": "Đặt sự vật trong điều kiện, hoàn cảnh, không gian và thời điểm cụ thể."
      },
      {
        "letter": "D",
        "text": "Đánh giá sự vật theo cảm nhận cá nhân, không cần xét hoàn cảnh."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "C",
    "explanation": "Quan điểm lịch sử, cụ thể đặt sự vật trong điều kiện, hoàn cảnh, không gian và thời điểm xác định."
  },
  {
    "id": 9,
    "question": "Phương án nào nêu đủ các tính chất của sự phát triển theo tài liệu?",
    "options": [
      {
        "letter": "A",
        "text": "Khách quan, phổ biến, kế thừa, đa dạng và phong phú."
      },
      {
        "letter": "B",
        "text": "Chủ quan, ngẫu nhiên, bất biến và đơn nhất."
      },
      {
        "letter": "C",
        "text": "Tuyến tính, liên tục, không có mâu thuẫn và không kế thừa."
      },
      {
        "letter": "D",
        "text": "Chỉ tồn tại trong tự nhiên, không có trong xã hội và tư duy."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "A",
    "explanation": "Sự phát triển có tính khách quan, phổ biến, kế thừa và đa dạng, phong phú."
  },
  {
    "id": 10,
    "question": "Theo quan điểm phát triển, cách ứng xử nào phù hợp nhất?",
    "options": [
      {
        "letter": "A",
        "text": "Giữ nguyên mọi phương pháp cũ vì cái mới luôn đáng nghi ngờ."
      },
      {
        "letter": "B",
        "text": "Đòi hỏi kết quả tức thì, bỏ qua các giai đoạn trung gian."
      },
      {
        "letter": "C",
        "text": "Xem xét sự vật ở hiện tại và không cần dự báo khuynh hướng tương lai."
      },
      {
        "letter": "D",
        "text": "Tôn trọng các giai đoạn phát triển, ủng hộ cái mới hợp quy luật và kế thừa có chọn lọc yếu tố tích cực của cái cũ."
      }
    ],
    "section": "Khái quát & hai nguyên lý",
    "answer": "D",
    "explanation": "Quan điểm phát triển yêu cầu tôn trọng các giai đoạn, ủng hộ cái mới hợp quy luật và kế thừa có chọn lọc."
  },
  {
    "id": 11,
    "question": "Phát biểu nào phân biệt đúng cái riêng, cái chung và cái đơn nhất?",
    "options": [
      {
        "letter": "A",
        "text": "Cái riêng là thuộc tính lặp lại ở nhiều sự vật; cái chung là một sự vật riêng lẻ."
      },
      {
        "letter": "B",
        "text": "Cái riêng là sự vật, hiện tượng nhất định; cái chung là những mặt lặp lại ở nhiều sự vật; cái đơn nhất là đặc điểm chỉ có ở một cái riêng nhất định."
      },
      {
        "letter": "C",
        "text": "Cái đơn nhất là thuộc tính có trong mọi sự vật cùng loại."
      },
      {
        "letter": "D",
        "text": "Cái chung tồn tại độc lập hoàn toàn, không biểu hiện trong cái riêng."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "B",
    "explanation": "Cái riêng là sự vật cụ thể; cái chung là mặt lặp lại ở nhiều sự vật; cái đơn nhất là đặc điểm riêng không lặp lại ở sự vật khác."
  },
  {
    "id": 12,
    "question": "Mối quan hệ giữa cái chung và cái riêng được mô tả đúng như thế nào?",
    "options": [
      {
        "letter": "A",
        "text": "Cái chung luôn tồn tại tách biệt khỏi cái riêng."
      },
      {
        "letter": "B",
        "text": "Cái riêng chỉ chứa cái đơn nhất, không có cái chung."
      },
      {
        "letter": "C",
        "text": "Cái chung chỉ tồn tại trong cái riêng và thông qua cái riêng mà biểu hiện."
      },
      {
        "letter": "D",
        "text": "Cái chung và cái riêng không thể tác động hoặc chuyển hóa trong điều kiện nhất định."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "C",
    "explanation": "Cái chung không tồn tại tách biệt mà chỉ tồn tại trong cái riêng và thông qua cái riêng biểu hiện."
  },
  {
    "id": 13,
    "question": "Theo cặp phạm trù nguyên nhân và kết quả, nguyên nhân là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Sự tác động lẫn nhau giữa các mặt hoặc các sự vật gây ra một biến đổi nhất định."
      },
      {
        "letter": "B",
        "text": "Bất kỳ sự kiện nào xảy ra sau một sự kiện khác, dù không có quan hệ tác động."
      },
      {
        "letter": "C",
        "text": "Biến đổi xuất hiện sau cùng và không phụ thuộc điều kiện."
      },
      {
        "letter": "D",
        "text": "Một kết luận do con người tự đặt ra mà không cần căn cứ vào sự vật."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "A",
    "explanation": "Nguyên nhân là sự tác động qua lại gây ra biến đổi, không đơn thuần là sự kiện xảy ra trước."
  },
  {
    "id": 14,
    "question": "Khi kết quả học tập thấp, cách vận dụng cặp nguyên nhân – kết quả nào phù hợp nhất?",
    "options": [
      {
        "letter": "A",
        "text": "Chỉ quy kết do năng lực bẩm sinh."
      },
      {
        "letter": "B",
        "text": "Chấp nhận kết quả vì nguyên nhân không thể nhận biết."
      },
      {
        "letter": "C",
        "text": "Chỉ thay đổi hình thức trình bày bài làm mà không xem lại cách học."
      },
      {
        "letter": "D",
        "text": "Tìm các nguyên nhân, xác định nguyên nhân chủ yếu và xem xét điều kiện tác động để điều chỉnh phù hợp."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "D",
    "explanation": "Muốn cải thiện kết quả cần tìm nguyên nhân, xác định nguyên nhân chủ yếu và xem xét điều kiện tác động."
  },
  {
    "id": 15,
    "question": "Phát biểu nào phân biệt đúng tất nhiên và ngẫu nhiên?",
    "options": [
      {
        "letter": "A",
        "text": "Tất nhiên hoàn toàn do mong muốn chủ quan quyết định; ngẫu nhiên luôn có nguyên nhân bên trong."
      },
      {
        "letter": "B",
        "text": "Tất nhiên không bao giờ biểu hiện qua ngẫu nhiên."
      },
      {
        "letter": "C",
        "text": "Tất nhiên do những mối liên hệ bản chất quy định trong điều kiện nhất định; ngẫu nhiên có thể xảy ra hoặc không, tùy nguyên nhân và hoàn cảnh."
      },
      {
        "letter": "D",
        "text": "Tất nhiên và ngẫu nhiên không tồn tại đồng thời trong một sự vật."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "C",
    "explanation": "Tất nhiên bắt nguồn từ mối liên hệ bản chất; ngẫu nhiên có thể xảy ra hoặc không tùy hoàn cảnh."
  },
  {
    "id": 16,
    "question": "Mối quan hệ giữa nội dung và hình thức được trình bày đúng ở phương án nào?",
    "options": [
      {
        "letter": "A",
        "text": "Hình thức quyết định tuyệt đối nội dung và không chịu ảnh hưởng từ nội dung."
      },
      {
        "letter": "B",
        "text": "Nội dung quyết định hình thức, nhưng hình thức cũng tác động trở lại nội dung."
      },
      {
        "letter": "C",
        "text": "Nội dung và hình thức hoàn toàn độc lập với nhau."
      },
      {
        "letter": "D",
        "text": "Khi nội dung thay đổi, hình thức cũ luôn luôn phù hợp và không cần xem xét lại."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "B",
    "explanation": "Nội dung quyết định hình thức, đồng thời hình thức tác động trở lại nội dung."
  },
  {
    "id": 17,
    "question": "Nhận định nào đúng về bản chất và hiện tượng?",
    "options": [
      {
        "letter": "A",
        "text": "Hiện tượng luôn phản ánh đầy đủ, trực tiếp và không biến đổi bản chất."
      },
      {
        "letter": "B",
        "text": "Bản chất chỉ là vẻ ngoài dễ quan sát của sự vật."
      },
      {
        "letter": "C",
        "text": "Bản chất và hiện tượng không có liên hệ với nhau."
      },
      {
        "letter": "D",
        "text": "Bản chất là tổng thể các mối liên hệ bên trong tương đối ổn định; hiện tượng là sự biểu hiện của bản chất và có thể chịu tác động của yếu tố khác."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "D",
    "explanation": "Bản chất là các mối liên hệ bên trong tương đối ổn định; hiện tượng là biểu hiện của bản chất nhưng có thể bị các yếu tố khác tác động."
  },
  {
    "id": 18,
    "question": "Khi đánh giá chất lượng một chiếc điện thoại, cách làm nào phù hợp với cặp bản chất – hiện tượng?",
    "options": [
      {
        "letter": "A",
        "text": "Không kết luận chỉ từ vẻ ngoài; cần xem xét thêm hiệu năng, độ bền và các biểu hiện liên quan."
      },
      {
        "letter": "B",
        "text": "Chỉ cần thiết kế đẹp là đủ kết luận chất lượng tốt."
      },
      {
        "letter": "C",
        "text": "Bỏ qua mọi hiện tượng quan sát được vì chỉ bản chất mới tồn tại."
      },
      {
        "letter": "D",
        "text": "Chỉ dựa vào một biểu hiện bất kỳ để xác định toàn bộ bản chất."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "A",
    "explanation": "Không nên đánh giá chất lượng chỉ từ vẻ ngoài; cần xem nhiều biểu hiện như hiệu năng và độ bền."
  },
  {
    "id": 19,
    "question": "Phát biểu nào mô tả đúng mối quan hệ giữa khả năng và hiện thực?",
    "options": [
      {
        "letter": "A",
        "text": "Khả năng và hiện thực không có quan hệ với nhau."
      },
      {
        "letter": "B",
        "text": "Mọi khả năng đều chắc chắn trở thành hiện thực ngay lập tức."
      },
      {
        "letter": "C",
        "text": "Khả năng bắt nguồn từ hiện thực và có thể chuyển hóa thành hiện thực khi có đủ điều kiện; hiện thực mới lại tạo ra những khả năng mới."
      },
      {
        "letter": "D",
        "text": "Hiện thực chỉ là điều chưa tồn tại nhưng có thể xuất hiện trong tương lai."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "C",
    "explanation": "Khả năng bắt nguồn từ hiện thực và có thể thành hiện thực khi đủ điều kiện; hiện thực mới mở ra các khả năng mới."
  },
  {
    "id": 20,
    "question": "Ý nghĩa phương pháp luận của cặp khả năng – hiện thực là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Coi mọi khả năng là kết quả chắc chắn, không cần kiểm tra điều kiện."
      },
      {
        "letter": "B",
        "text": "Đánh giá khả năng dựa trên điều kiện thực tế và chủ động tạo điều kiện để biến khả năng tích cực thành hiện thực."
      },
      {
        "letter": "C",
        "text": "Chỉ quan tâm đến hiện thực hiện tại, không xem xét khả năng mới."
      },
      {
        "letter": "D",
        "text": "Chờ khả năng tự thành hiện thực mà không cần hành động."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "B",
    "explanation": "Cần đánh giá khả năng căn cứ vào điều kiện thực tế và chủ động tạo điều kiện để hiện thực hóa khả năng tích cực."
  },
  {
    "id": 21,
    "question": "Phương án nào phân biệt đúng khả năng thực và khả năng hình thức theo tài liệu?",
    "options": [
      {
        "letter": "A",
        "text": "Khả năng thực là điều không thể xảy ra; khả năng hình thức là điều chắc chắn xảy ra."
      },
      {
        "letter": "B",
        "text": "Khả năng thực và khả năng hình thức chỉ khác nhau ở tên gọi, không có căn cứ phân biệt."
      },
      {
        "letter": "C",
        "text": "Khả năng thực là khả năng đã trở thành hiện thực; khả năng hình thức là hiện thực đã mất đi."
      },
      {
        "letter": "D",
        "text": "Khả năng thực dựa trên những thuộc tính, mối liên hệ tất nhiên; khả năng hình thức dựa trên những thuộc tính, mối liên hệ ngẫu nhiên."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "D",
    "explanation": "Theo tài liệu, khả năng thực dựa trên thuộc tính và mối liên hệ tất nhiên; khả năng hình thức dựa trên yếu tố ngẫu nhiên."
  },
  {
    "id": 22,
    "question": "Phát biểu nào đúng về khả năng cụ thể và khả năng trừu tượng?",
    "options": [
      {
        "letter": "A",
        "text": "Khả năng cụ thể đã có đủ điều kiện thực hiện; khả năng trừu tượng chưa đủ điều kiện nhưng có thể xuất hiện khi sự vật phát triển."
      },
      {
        "letter": "B",
        "text": "Khả năng cụ thể không có điều kiện thực hiện; khả năng trừu tượng luôn có đủ điều kiện."
      },
      {
        "letter": "C",
        "text": "Khả năng cụ thể là điều đã xảy ra; khả năng trừu tượng là điều tuyệt đối không thể xảy ra."
      },
      {
        "letter": "D",
        "text": "Hai loại khả năng không liên quan đến điều kiện thực tế."
      }
    ],
    "section": "Sáu cặp phạm trù",
    "answer": "A",
    "explanation": "Khả năng cụ thể đã có đủ điều kiện thực hiện; khả năng trừu tượng chưa đủ điều kiện nhưng có thể có khi sự vật phát triển."
  },
  {
    "id": 23,
    "question": "Mặt đối lập trong phép biện chứng được hiểu là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Hai sự vật không liên quan và không cùng tồn tại."
      },
      {
        "letter": "B",
        "text": "Hai ý kiến chủ quan bất kỳ mà con người không đồng tình."
      },
      {
        "letter": "C",
        "text": "Những mặt, bộ phận hoặc thuộc tính có khuynh hướng biến đổi trái ngược nhau nhưng cùng tồn tại khách quan trong một sự vật, hiện tượng."
      },
      {
        "letter": "D",
        "text": "Những đặc điểm giống nhau hoàn toàn và không có khả năng tác động lẫn nhau."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "C",
    "explanation": "Mặt đối lập có khuynh hướng biến đổi trái ngược nhưng cùng tồn tại khách quan trong một sự vật."
  },
  {
    "id": 24,
    "question": "Mâu thuẫn biện chứng là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Một lỗi lập luận chỉ xuất hiện trong ngôn ngữ."
      },
      {
        "letter": "B",
        "text": "Mối liên hệ, tác động giữa các mặt đối lập theo cách vừa thống nhất vừa đấu tranh, vừa đòi hỏi vừa loại trừ và có thể chuyển hóa lẫn nhau."
      },
      {
        "letter": "C",
        "text": "Trạng thái cân bằng tuyệt đối, không có biến đổi."
      },
      {
        "letter": "D",
        "text": "Bất kỳ sự bất đồng ý kiến nào giữa hai người."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "B",
    "explanation": "Mâu thuẫn biện chứng gồm sự thống nhất và đấu tranh giữa các mặt đối lập, có thể tác động và chuyển hóa lẫn nhau."
  },
  {
    "id": 25,
    "question": "Theo quy luật thống nhất và đấu tranh của các mặt đối lập, nhận định nào đúng?",
    "options": [
      {
        "letter": "A",
        "text": "Thống nhất và đấu tranh đều chỉ có tính tạm thời như nhau."
      },
      {
        "letter": "B",
        "text": "Thống nhất luôn tuyệt đối, còn đấu tranh chỉ diễn ra do con người tạo ra."
      },
      {
        "letter": "C",
        "text": "Đấu tranh giữa các mặt đối lập không liên quan đến sự vận động của sự vật."
      },
      {
        "letter": "D",
        "text": "Sự thống nhất có tính tương đối, tạm thời; sự đấu tranh có tính tuyệt đối, gắn với quá trình vận động không ngừng."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "D",
    "explanation": "Sự thống nhất có tính tương đối, tạm thời; sự đấu tranh có tính tuyệt đối và gắn với vận động."
  },
  {
    "id": 26,
    "question": "Quy luật thống nhất và đấu tranh của các mặt đối lập giữ vị trí nào trong phép biện chứng duy vật?",
    "options": [
      {
        "letter": "A",
        "text": "Là quy luật chỉ ra nguồn gốc và động lực bên trong của sự vận động, phát triển."
      },
      {
        "letter": "B",
        "text": "Là quy luật chỉ mô tả hình thức bên ngoài của sự vật."
      },
      {
        "letter": "C",
        "text": "Là quy luật phủ nhận vai trò của mâu thuẫn khách quan."
      },
      {
        "letter": "D",
        "text": "Là quy luật giải thích phát triển chỉ bằng sự tăng giảm về số lượng."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "A",
    "explanation": "Quy luật này chỉ ra nguồn gốc và động lực bên trong của sự vận động, phát triển."
  },
  {
    "id": 27,
    "question": "Cách giải quyết mâu thuẫn nào phù hợp với ý nghĩa phương pháp luận của quy luật thứ nhất?",
    "options": [
      {
        "letter": "A",
        "text": "Che giấu mâu thuẫn để giữ nguyên trạng thái hiện tại."
      },
      {
        "letter": "B",
        "text": "Điều hòa mọi mâu thuẫn một cách máy móc, không cần phân tích."
      },
      {
        "letter": "C",
        "text": "Thừa nhận tính khách quan của mâu thuẫn, phân tích quá trình và vai trò của nó, rồi lựa chọn cách giải quyết phù hợp với điều kiện."
      },
      {
        "letter": "D",
        "text": "Giải quyết mọi mâu thuẫn ngay lập tức, bất kể điều kiện đã chín muồi hay chưa."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "C",
    "explanation": "Cần thừa nhận mâu thuẫn khách quan, phân tích đúng vai trò và giải quyết phù hợp điều kiện, không che giấu hay nóng vội."
  },
  {
    "id": 28,
    "question": "Ví dụ nào minh họa rõ mâu thuẫn thúc đẩy sự phát triển trong học tập theo tài liệu?",
    "options": [
      {
        "letter": "A",
        "text": "Sinh viên giữ nguyên cách học dù yêu cầu kiến thức đã thay đổi."
      },
      {
        "letter": "B",
        "text": "Sinh viên nhận ra khoảng cách giữa kiến thức hiện có và yêu cầu kiến thức mới, từ đó chủ động học tập để khắc phục."
      },
      {
        "letter": "C",
        "text": "Sinh viên tránh mọi bài tập khó để không phải thay đổi."
      },
      {
        "letter": "D",
        "text": "Sinh viên cho rằng mâu thuẫn chỉ tồn tại trong suy nghĩ, không liên quan đến thực tiễn."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "B",
    "explanation": "Khoảng cách giữa kiến thức hiện có và yêu cầu mới có thể thúc đẩy sinh viên học tập, rèn luyện để phát triển."
  },
  {
    "id": 29,
    "question": "Trong quy luật lượng – chất, ‘chất’ được hiểu là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Chỉ là số lượng bộ phận cấu thành sự vật."
      },
      {
        "letter": "B",
        "text": "Mức độ nhanh hay chậm của mọi biến đổi."
      },
      {
        "letter": "C",
        "text": "Khoảng giới hạn mà lượng thay đổi chưa làm chất thay đổi."
      },
      {
        "letter": "D",
        "text": "Tính quy định khách quan vốn có, là sự thống nhất hữu cơ của các thuộc tính, yếu tố làm sự vật là nó chứ không phải sự vật khác."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "D",
    "explanation": "Chất là tính quy định khách quan và sự thống nhất hữu cơ của các thuộc tính khiến sự vật là nó."
  },
  {
    "id": 30,
    "question": "‘Lượng’ trong phép biện chứng duy vật chỉ điều gì?",
    "options": [
      {
        "letter": "A",
        "text": "Tính quy định khách quan của sự vật về số lượng, quy mô, trình độ, nhịp độ vận động và phát triển."
      },
      {
        "letter": "B",
        "text": "Chỉ những thuộc tính làm cho sự vật khác với mọi sự vật khác."
      },
      {
        "letter": "C",
        "text": "Những đặc điểm bên ngoài không có liên hệ với sự vật."
      },
      {
        "letter": "D",
        "text": "Sự thay đổi về bản chất trong mọi trường hợp."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "A",
    "explanation": "Lượng phản ánh số lượng, quy mô, trình độ, nhịp độ vận động và phát triển của sự vật."
  },
  {
    "id": 31,
    "question": "Trong quy luật lượng – chất, ‘độ’ là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Thời điểm sự vật bắt đầu tồn tại."
      },
      {
        "letter": "B",
        "text": "Giới hạn mà trong đó lượng thay đổi chưa làm chất của sự vật thay đổi cơ bản."
      },
      {
        "letter": "C",
        "text": "Sự chuyển hóa cơ bản về chất khi lượng đạt tới giới hạn."
      },
      {
        "letter": "D",
        "text": "Kết quả của việc phủ định cái cũ hai lần."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "B",
    "explanation": "Độ là giới hạn trong đó lượng thay đổi nhưng chưa làm chất thay đổi cơ bản."
  },
  {
    "id": 32,
    "question": "Cặp khái niệm nào được ghép đúng trong quy luật lượng – chất?",
    "options": [
      {
        "letter": "A",
        "text": "Điểm nút là giới hạn lượng biến đổi mà chất không đổi; độ là bước chuyển hóa cơ bản về chất."
      },
      {
        "letter": "B",
        "text": "Bước nhảy là quá trình kế thừa cái cũ; phủ định biện chứng là tích lũy số lượng."
      },
      {
        "letter": "C",
        "text": "Điểm nút là giới hạn mà tại đó sự thay đổi về lượng làm phá vỡ độ cũ; bước nhảy là sự chuyển hóa cơ bản về chất."
      },
      {
        "letter": "D",
        "text": "Độ là nguyên nhân bên ngoài; điểm nút là kết quả ngẫu nhiên."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "C",
    "explanation": "Điểm nút là giới hạn làm phá vỡ độ cũ; bước nhảy là sự chuyển hóa cơ bản về chất."
  },
  {
    "id": 33,
    "question": "Trình tự nào thể hiện đúng quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất và ngược lại?",
    "options": [
      {
        "letter": "A",
        "text": "Lượng tích lũy đến điểm nút làm xuất hiện bước nhảy về chất; chất mới lại tác động, tạo điều kiện cho lượng và độ mới."
      },
      {
        "letter": "B",
        "text": "Chất thay đổi hoàn toàn không liên quan đến lượng."
      },
      {
        "letter": "C",
        "text": "Lượng thay đổi bao nhiêu cũng không thể dẫn đến thay đổi về chất."
      },
      {
        "letter": "D",
        "text": "Chỉ có chất tác động đến lượng, còn lượng không thể tác động đến chất."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "A",
    "explanation": "Lượng tích lũy đến điểm nút dẫn đến bước nhảy về chất; chất mới lại tác động đến lượng và tạo độ mới."
  },
  {
    "id": 34,
    "question": "Vận dụng quy luật lượng – chất trong học tập nên làm gì?",
    "options": [
      {
        "letter": "A",
        "text": "Đòi hỏi thành thạo ngay từ đầu mà không cần tích lũy kiến thức."
      },
      {
        "letter": "B",
        "text": "Tiếp tục tích lũy mãi dù điều kiện đã chín muồi, không thực hiện bước chuyển đổi."
      },
      {
        "letter": "C",
        "text": "Coi mọi thay đổi nhỏ đều lập tức làm thay đổi chất."
      },
      {
        "letter": "D",
        "text": "Coi trọng tích lũy kiến thức, tránh nóng vội; khi điều kiện chín muồi thì thực hiện bước nhảy phù hợp."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "D",
    "explanation": "Cần tích lũy kiến thức, tránh nóng vội; khi điều kiện chín muồi thì thực hiện bước nhảy phù hợp."
  },
  {
    "id": 35,
    "question": "Phủ định biện chứng có những đặc điểm cơ bản nào?",
    "options": [
      {
        "letter": "A",
        "text": "Do ý muốn chủ quan quyết định và xóa bỏ toàn bộ cái cũ."
      },
      {
        "letter": "B",
        "text": "Có tính khách quan, do mâu thuẫn bên trong quy định, đồng thời có tính kế thừa."
      },
      {
        "letter": "C",
        "text": "Giữ nguyên toàn bộ cái cũ, không tạo điều kiện cho cái mới."
      },
      {
        "letter": "D",
        "text": "Là sự quay lại chính xác trạng thái ban đầu, không có thay đổi."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "B",
    "explanation": "Phủ định biện chứng có tính khách quan và tính kế thừa, bắt nguồn từ mâu thuẫn bên trong sự vật."
  },
  {
    "id": 36,
    "question": "Kế thừa biện chứng được hiểu là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Sao chép nguyên xi mọi yếu tố của sự vật cũ."
      },
      {
        "letter": "B",
        "text": "Loại bỏ toàn bộ cái cũ để cái mới bắt đầu từ con số không."
      },
      {
        "letter": "C",
        "text": "Giữ lại có chọn lọc và cải tạo những yếu tố còn phù hợp, đồng thời loại bỏ yếu tố lỗi thời cản trở phát triển."
      },
      {
        "letter": "D",
        "text": "Chỉ giữ lại những yếu tố ngẫu nhiên, không xét tính phù hợp."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "C",
    "explanation": "Kế thừa biện chứng giữ lại và cải tạo có chọn lọc yếu tố còn phù hợp, loại bỏ yếu tố lỗi thời."
  },
  {
    "id": 37,
    "question": "Hình thức phát triển theo đường xoáy ốc có ý nghĩa gì?",
    "options": [
      {
        "letter": "A",
        "text": "Sự phát triển có xu hướng đi lên nhưng quanh co, có thể lặp lại một số đặc điểm cũ ở trình độ cao hơn, chứ không quay lại nguyên trạng."
      },
      {
        "letter": "B",
        "text": "Sự vật luôn lặp lại chính xác trạng thái ban đầu."
      },
      {
        "letter": "C",
        "text": "Mọi giai đoạn phát triển đều giống hệt nhau và không có yếu tố mới."
      },
      {
        "letter": "D",
        "text": "Sự phát triển chỉ diễn ra theo đường thẳng, không có kế thừa."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "A",
    "explanation": "Đường xoáy ốc chỉ sự phát triển đi lên nhưng quanh co, có kế thừa và lặp lại một số nét ở trình độ cao hơn."
  },
  {
    "id": 38,
    "question": "Theo quy luật phủ định của phủ định, hai lần phủ định có thể được mô tả như thế nào?",
    "options": [
      {
        "letter": "A",
        "text": "Cả hai lần đều chỉ bảo tồn nguyên trạng sự vật cũ."
      },
      {
        "letter": "B",
        "text": "Lần thứ nhất tạo ra hiện thực cuối cùng; lần thứ hai xóa sạch mọi yếu tố trước đó."
      },
      {
        "letter": "C",
        "text": "Lần thứ nhất và lần thứ hai không có quan hệ kế tiếp nhau."
      },
      {
        "letter": "D",
        "text": "Phủ định lần thứ nhất làm sự vật cũ chuyển thành sự vật đối lập; phủ định lần thứ hai dẫn đến sự vật mới, kế thừa yếu tố tích cực và phát triển thêm."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "D",
    "explanation": "Lần phủ định thứ nhất tạo ra sự vật đối lập; lần thứ hai tạo ra sự vật mới kế thừa yếu tố tích cực và phát triển thêm."
  },
  {
    "id": 39,
    "question": "Hai khuynh hướng cần tránh khi vận dụng quy luật phủ định của phủ định là gì?",
    "options": [
      {
        "letter": "A",
        "text": "Đổi mới và học hỏi từ kinh nghiệm."
      },
      {
        "letter": "B",
        "text": "Phủ định sạch trơn cái cũ và giữ lại nguyên xi những yếu tố đã lỗi thời."
      },
      {
        "letter": "C",
        "text": "Kế thừa có chọn lọc và cải tiến phương pháp."
      },
      {
        "letter": "D",
        "text": "Thừa nhận phát triển có thể quanh co, phức tạp."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "B",
    "explanation": "Cần tránh cả phủ định sạch trơn lẫn giữ nguyên xi các yếu tố đã lỗi thời."
  },
  {
    "id": 40,
    "question": "Phương án nào ghép đúng ba quy luật cơ bản với phương diện phát triển mà chúng làm rõ?",
    "options": [
      {
        "letter": "A",
        "text": "Mâu thuẫn – hình thức; lượng – chất – khuynh hướng; phủ định của phủ định – nguyên nhân."
      },
      {
        "letter": "B",
        "text": "Mâu thuẫn – kết quả cuối cùng; lượng – chất – bản chất; phủ định của phủ định – điều kiện ngẫu nhiên."
      },
      {
        "letter": "C",
        "text": "Thống nhất và đấu tranh của các mặt đối lập – nguồn gốc, động lực; lượng – chất – cách thức; phủ định của phủ định – khuynh hướng phát triển."
      },
      {
        "letter": "D",
        "text": "Cả ba quy luật đều chỉ giải thích sự tăng lên về số lượng."
      }
    ],
    "section": "Ba quy luật cơ bản",
    "answer": "C",
    "explanation": "Ba quy luật lần lượt làm rõ nguồn gốc, động lực; cách thức; và khuynh hướng của sự phát triển."
  }
];


const $ = (id) => document.getElementById(id);
const screens = [$('start-screen'), $('quiz-screen'), $('result-screen')];
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let answersLog = [];
let retryWrongMode = false;

function showScreen(screen) {
  screens.forEach(s => s.classList.toggle('active', s === screen));
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function startQuiz({onlyWrong = false, shuffleQuestions = false, sourceQuestions = QUESTIONS} = {}) {
  retryWrongMode = onlyWrong;
  quizQuestions = shuffleQuestions ? shuffle(sourceQuestions) : [...sourceQuestions];
  currentIndex = 0;
  score = 0;
  selectedAnswer = null;
  answersLog = [];
  $('live-score').textContent = '0';
  $('question-total').textContent = String(quizQuestions.length);
  showScreen($('quiz-screen'));
  renderQuestion();
}
function renderQuestion() {
  selectedAnswer = null;
  const q = quizQuestions[currentIndex];
  const questionNo = currentIndex + 1;
  $('question-number').textContent = `CÂU ${String(questionNo).padStart(2, '0')}`;
  $('question-total').textContent = String(quizQuestions.length);
  $('section-badge').textContent = q.section.toLocaleUpperCase('vi-VN');
  $('question-text').textContent = q.question;
  $('answers-grid').replaceChildren();
  $('feedback').hidden = true;
  $('feedback').className = 'feedback';
  $('feedback').replaceChildren();
  $('next-btn').disabled = true;
  $('next-btn').innerHTML = questionNo === quizQuestions.length ? 'Xem kết quả <span aria-hidden="true">→</span>' : 'Câu tiếp theo <span aria-hidden="true">→</span>';
  q.options.forEach(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.dataset.letter = option.letter;
    button.innerHTML = `<span class="answer-letter">${option.letter}</span><span class="answer-text"></span>`;
    button.querySelector('.answer-text').textContent = option.text;
    button.addEventListener('click', () => chooseAnswer(option.letter));
    $('answers-grid').appendChild(button);
  });
  const progress = Math.round((currentIndex / quizQuestions.length) * 100);
  $('progress-fill').style.width = `${progress}%`;
  $('progress-track').setAttribute('aria-valuemax', String(quizQuestions.length));
  $('progress-track').setAttribute('aria-valuenow', String(currentIndex));
  $('answered-label').textContent = `${answersLog.length} câu đã trả lời`;
}
function chooseAnswer(letter) {
  if (selectedAnswer !== null) return;
  selectedAnswer = letter;
  const q = quizQuestions[currentIndex];
  const isCorrect = letter === q.answer;
  if (isCorrect) score++;
  answersLog.push({question: q, chosen: letter, correct: isCorrect});
  $('live-score').textContent = String(score);
  document.querySelectorAll('.answer-option').forEach(button => {
    button.disabled = true;
    const optionLetter = button.dataset.letter;
    if (optionLetter === q.answer) button.classList.add('correct');
    else if (optionLetter === letter) button.classList.add('incorrect');
    else button.classList.add('dimmed');
  });
  showFeedback(q, isCorrect, letter);
  $('next-btn').disabled = false;
  $('answered-label').textContent = `${answersLog.length} câu đã trả lời`;
  const progress = Math.round((answersLog.length / quizQuestions.length) * 100);
  $('progress-fill').style.width = `${progress}%`;
  $('progress-track').setAttribute('aria-valuenow', String(answersLog.length));
}
function showFeedback(q, isCorrect, chosen) {
  const box = $('feedback');
  box.hidden = false;
  box.className = `feedback ${isCorrect ? 'success' : 'fail'}`;
  const icon = document.createElement('span');
  icon.className = 'feedback-icon';
  icon.textContent = isCorrect ? '✓' : '×';
  const textWrap = document.createElement('div');
  const title = document.createElement('strong');
  title.textContent = isCorrect ? 'Chính xác! Bạn đã chọn đúng.' : `Chưa chính xác. Đáp án đúng là ${q.answer}.`;
  const detail = document.createElement('p');
  const correctOption = q.options.find(o => o.letter === q.answer);
  detail.textContent = `${correctOption.letter}. ${correctOption.text} ${q.explanation}`;
  textWrap.append(title, detail);
  box.append(icon, textWrap);
}
function nextQuestion() {
  if (selectedAnswer === null) return;
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}
function showResults() {
  showScreen($('result-screen'));
  const total = quizQuestions.length;
  const wrong = answersLog.filter(item => !item.correct);
  const percent = total ? Math.round((score / total) * 100) : 0;
  $('final-percent').textContent = `${percent}%`;
  $('score-ring').style.setProperty('--score', `${percent * 3.6}deg`);
  $('correct-count').textContent = String(score);
  $('wrong-count').textContent = String(wrong.length);
  $('final-total').textContent = String(total);
  $('review-counter').textContent = `${wrong.length} câu`;
  $('wrong-only-count').textContent = wrong.length ? `(${wrong.length})` : '';
  $('wrong-only-btn').disabled = wrong.length === 0;
  $('result-message').textContent = percent >= 90 ? 'Xuất sắc! Bạn đã nắm rất vững các nội dung trọng tâm.' : percent >= 70 ? 'Làm tốt! Hãy xem lại các câu sai để củng cố kiến thức.' : percent >= 50 ? 'Bạn đã có nền tảng. Ôn lại phần giải thích rồi thử sức thêm nhé.' : 'Đừng nản lòng — mỗi câu sai là một cơ hội để hiểu bài sâu hơn.';
  $('result-title').innerHTML = percent >= 80 ? 'Kiến thức đang<br><span>kết nối rất tốt.</span>' : 'Mỗi lần ôn tập<br><span>là một bước tiến.</span>';
  const list = $('review-list');
  list.replaceChildren();
  if (wrong.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'review-empty';
    empty.textContent = 'Tuyệt vời! Bạn đã trả lời đúng tất cả câu hỏi trong lượt này. Hãy thử làm lại với thứ tự câu hỏi được trộn để tiếp tục ghi nhớ kiến thức.';
    list.appendChild(empty);
  } else {
    wrong.forEach((item, idx) => {
      const q = item.question;
      const details = document.createElement('details');
      details.className = 'review-item';
      const summary = document.createElement('summary');
      const num = document.createElement('span');
      num.className = 'review-qnum';
      num.textContent = `CÂU ${String(q.id).padStart(2, '0')}`;
      const title = document.createElement('span');
      title.textContent = q.question;
      summary.append(num, title);
      const content = document.createElement('div');
      content.className = 'review-content';
      const chosenText = q.options.find(o => o.letter === item.chosen)?.text || '';
      const correctText = q.options.find(o => o.letter === q.answer)?.text || '';
      const p1 = document.createElement('p');
      p1.textContent = `Bạn chọn ${item.chosen}: ${chosenText}`;
      const p2 = document.createElement('p');
      p2.className = 'review-answer';
      p2.textContent = `Đáp án đúng ${q.answer}: ${correctText}`;
      const p3 = document.createElement('p');
      p3.textContent = q.explanation;
      content.append(p1, p2, p3);
      details.append(summary, content);
      if (idx === 0) details.open = true;
      list.appendChild(details);
    });
  }
  $('progress-fill').style.width = '100%';
}

$('start-btn').addEventListener('click', () => startQuiz({shuffleQuestions: $('shuffle-toggle').checked}));
$('next-btn').addEventListener('click', nextQuestion);
$('exit-btn').addEventListener('click', () => showScreen($('start-screen')));
$('brand-home').addEventListener('click', e => { e.preventDefault(); showScreen($('start-screen')); });
$('retry-btn').addEventListener('click', () => startQuiz({shuffleQuestions: $('shuffle-toggle').checked}));
$('wrong-only-btn').addEventListener('click', () => {
  const wrongQuestions = answersLog.filter(item => !item.correct).map(item => item.question);
  if (wrongQuestions.length) startQuiz({onlyWrong: true, sourceQuestions: wrongQuestions, shuffleQuestions: false});
});
document.addEventListener('keydown', e => {
  if (!$('quiz-screen').classList.contains('active')) return;
  if (['A','B','C','D'].includes(e.key.toUpperCase())) chooseAnswer(e.key.toUpperCase());
  if (e.key === 'Enter' && !$('next-btn').disabled) nextQuestion();
});
