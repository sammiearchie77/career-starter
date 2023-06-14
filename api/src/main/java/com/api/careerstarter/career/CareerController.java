package com.api.careerstarter.career;

import java.util.List;

import javax.naming.NameNotFoundException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(
        origins = "http://localhost:3000"
)
@RequestMapping(path = "api/v1/careers")
public class CareerController {

    private final CareerService careerService;

    public CareerController(CareerService careerService) {
        this.careerService = careerService;
    }

    /**
     * @return - get careers
     */     
    @GetMapping
    public List<Career> getCareers(){
		return careerService.getCareers();
	}

    @GetMapping(path = "/{id}")
    public Career getCareerById(@PathVariable Long careerId) throws NameNotFoundException{
        return careerService.getCareerById(careerId);
    }

    @GetMapping(path = "/search")
    public List<Career> searchCareers(@RequestParam String q){
        return careerService.searchCareers(q);
    }
    /**
     * @param career
     */
    @PostMapping
    public void registerNewCareer(@RequestBody Career career){
        careerService.addNewCareer(career);
    }

    @DeleteMapping(path = "/{careerId}")
    public void deleteCareer(@PathVariable("careerId") Long careerId){
        careerService.deleteCareer(careerId);
    }

    /**
     * @param careerId
     * @param title
     * @param description
     * @param requiredSkill
     * @param salaryRange
     */
    @PutMapping(value="/{careerId}")
    public void updateCareer(@PathVariable("careerId") Long careerId,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) String description,
        @RequestParam(required = false) String requiredSkill,
        @RequestParam(required = false) String salaryRange) {
        careerService.updateCareer(
            careerId, title, description, requiredSkill, salaryRange);
    }
}
