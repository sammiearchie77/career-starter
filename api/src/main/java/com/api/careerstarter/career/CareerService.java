package com.api.careerstarter.career;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.naming.NameNotFoundException;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class CareerService {

	private final CareerRepository careerRepository;

	public CareerService(CareerRepository careerRepository){
		this.careerRepository = careerRepository;
	}
	/**
	 * getCareer - get all the careers 
	 * @return - return list of all careers
	 */
    public List<Career> getCareers(){
		return careerRepository.findAll();
	}
	
	/**
	 * 
	 * @param careerId
	 * @return - career by Id
	 * @throws NameNotFoundException
	 */
	public Career getCareerById(Long careerId) throws NameNotFoundException{
		return careerRepository.findById(careerId)
		    .orElseThrow(() -> new NameNotFoundException("Career not found by id " + careerId));
	}

	/**
	 * 
	 * @param q - search for careers based on query
	 * @return - the queried career
	 */
	public List<Career> searchCareers(String q){
		List<Career> careers = careerRepository.findAll();

		List<Career> matchingCareers = new ArrayList<>();

		for (Career career : careers) {
			if (career.getTitle().toLowerCase().contains(q.toLowerCase()) ||
			    career.getDescription().toLowerCase().contains(q.toLowerCase())) {
					matchingCareers.add(career);
				}
		}

		return matchingCareers;
	}

	/**
	 * 
	 * @param career - Adds a new career
	 */
	public void addNewCareer(Career career){
		Optional <Career> careerOptional = careerRepository.findByTitle(career.getTitle());
		if(careerOptional.isPresent()){
			throw new IllegalStateException("Career already exist");
		}
		careerRepository.save(career);
	}

	/**
	 * 
	 * @param careerId - Deletes a career 
	 */
	public void deleteCareer(Long careerId){
		boolean exists = careerRepository.existsById(careerId);
		if (!exists) {
			throw new IllegalStateException(
				"Career with id " + careerId + " does not exist");
		}
		careerRepository.deleteById(careerId);
	}

	/**
	 * updateCareer - This function updates a career 
	 * @param careerId
	 * @param title
	 * @param description
	 * @param requiredSkill
     * @param salaryRange
	 */

	@Transactional
	public void updateCareer(
		Long careerId, 
		String title, 
		String description,
		String requiredSkill,
		String salaryRange ){
		final Career career = careerRepository.findById(careerId)
		.orElseThrow(() -> new IllegalStateException(
			"career with id " + careerId + " does not exist"
		));

		if (title != null && title.length() > 0 && !Objects.equals(career.getTitle(), title)){
			Optional<Career> careerOptional = careerRepository.findByTitle(title);

			if (careerOptional.isPresent()){
				throw new IllegalStateException("Career title exist!");
			}
			career.setTitle(title);
		}

		if (description != null && description.length() > 0 && !Objects.equals(career.getDescription(), description)){
			career.setDescription(description);
		}
	}
	
}
