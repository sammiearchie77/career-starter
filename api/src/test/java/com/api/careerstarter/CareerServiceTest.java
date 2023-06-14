// package com.api.careerstarter;

// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.Mockito;
// import org.mockito.junit.MockitoJUnitRunner;

// import com.api.careerstarter.career.Career;
// import com.api.careerstarter.career.CareerRepository;
// import com.api.careerstarter.career.CareerService;

// import jakarta.inject.Inject;

// @RunWith(MockitoJUnitRunner.class)
// public class CareerServiceTest {
//     @Mock
//     private CareerRepository careerRepository;

//     @InjectMocks
//     private CareerService careerService;

//     @Test
//     public void testGetCareerById(){
//         Long careerId = 1L;
//         Career career = new Career();
//         career.setId(careerId);
//         career.setTitle("Software Engineer");
//         career.setDescription("Design and develop software applications");

//         Mockito.when(careerRepository.findById(careerId)).thenReturn(Optional.of(career));

//         Career result = careerService.getCareerById(careerId);

//         Assert.assertEquals(careerId, result.getId());
//         Assert.assertEquals("Software Engineer", result.getTitle());
//         Assert.assertEquals("Design and develop software applications", result.getDescription());
//     }
//     }
// }
