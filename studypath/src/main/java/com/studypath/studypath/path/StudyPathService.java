package com.studypath.studypath.path;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.naming.NameNotFoundException;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class StudyPathService {
    
    private final StudyPathRepository studyPathRepository;

    public StudyPathService(StudyPathRepository studyPathRepository){
        this.studyPathRepository = studyPathRepository;
    }

    public List<StudyPath> getStudyPaths(){
        return studyPathRepository.findAll();
    }

    /**
     * @param studyPathIId
     * @return
     * @throws NameNotFoundException
     */
    public StudyPath geStudyPathById(Long studyPathIId) throws NameNotFoundException{
        return studyPathRepository.findById(studyPathIId)
        .orElseThrow(()-> new NameNotFoundException("Study Path not found by id " + studyPathIId));
    }

    /**
     * @param q
     * @return
     */
    public List<StudyPath> searchStudyPaths(String q){
        List<StudyPath> studyPaths = studyPathRepository.findAll();

        List<StudyPath> matchingPaths = new ArrayList<>();

        for (StudyPath studyPath : studyPaths){
            if (studyPath.getTitle().toLowerCase().contains(q.toLowerCase()) ||
                studyPath.getDegreeProgram().toLowerCase().contains(q.toLowerCase())
            ){
                matchingPaths.add(studyPath);
            }
        }
        return matchingPaths;
    }

    public void addNewStudyPath(StudyPath studyPath){
        Optional <StudyPath> studyPathOptional = studyPathRepository.findByTitle(studyPath.getTitle());
        if (studyPathOptional.isPresent()){
            throw new IllegalStateException("Study Path already exits");
        }
        studyPathRepository.save(studyPath);
    }

    public void deleteStudyPath(Long studyPathId){
        boolean exits = studyPathRepository.existsById(studyPathId);
        if (!exits) {
            throw new IllegalStateException(
                "Study path with id " + studyPathId + " does not exit"
            );
        }
        studyPathRepository.deleteById(studyPathId);
    }

    @Transactional
    public void updateStudyPath(
        Long studyId,
        String title,
        String degreeProgram,
        String certification,
        String internship,
        String learningResources
    ){
        final StudyPath studyPath = studyPathRepository.findById(studyId)
        .orElseThrow(() -> new IllegalStateException(
            "Study path id " + studyId + " does not exist!"
        ));

        if (title != null && title.length() > 0 && !Objects.equals(studyPath.getTitle(), title)){
            Optional<StudyPath> studyPathOptional = studyPathRepository.findByTitle(title);

            if (studyPathOptional.isPresent()){
                throw new IllegalStateException("Study path exist!");
            }

            studyPath.setTitle(title);
        }

        if (degreeProgram != null && degreeProgram.length() > 0 && !Objects.equals(studyPath.getDegreeProgram(), degreeProgram)){
			studyPath.setDegreeProgram(degreeProgram);
		}
    }
}
