import { useState, useMemo } from 'react';

export function usePortfolioFilter(projects = []) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => {
      if (Array.isArray(project.categories)) {
        return project.categories.includes(activeCategory);
      }
      return project.category === activeCategory;
    });
  }, [projects, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredProjects
  };
}
