// package com.api.careerstarter;

// import org.aspectj.lang.annotation.Before;
// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.Mockito;
// import org.mockito.junit.MockitoJUnitRunner;
// import org.springframework.test.web.servlet.MockMvc;
// import org.springframework.test.web.servlet.MockMvcBuilder;
// import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
// import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
// import org.springframework.test.web.servlet.setup.MockMvcBuilders;

// import com.api.careerstarter.career.Career;
// import com.api.careerstarter.career.CareerController;
// import com.api.careerstarter.career.CareerService;

// @RunWith(MockitoJUnitRunner.class)
// public class CareerStarterControllerTest {
//     @Mock
//     private CareerService careerService;

//     @InjectMocks
//     private CareerController careerController;

//     private MockMvc mockMvc;

//     @Before
//     public void setUp(){
//         mockMvc = MockMvcBuilders.standaloneSetup(careerController).build();
//     }

//     @Test
//     public void testCareerById() throws Exception {
//         Long careerId = 1L;
//         Career career = new Career();
//         career.setId(careerId);
//         career.setTitle("Software Engineer");
//         career.setDescription("Design and develop software applications");

//         Mockito.when(careerService.getCareerById(careerId)).thenReturn(career);

//         mockMvc.perform(MockMvcRequestBuilders.get("/api.careers/{id}", careerId))
//                 .andExpect(MockMvcResultMatchers.status().isOk())
//                 .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(careerId))
//                 .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("Software Engineer"))
//                 .andExpect(MockMvcResultMatchers.jsonPath("$.description").value("Design and develop software applications"));
//     }
    
// }
